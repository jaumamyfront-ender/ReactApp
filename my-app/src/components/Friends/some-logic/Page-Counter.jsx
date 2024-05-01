// import React from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import classes from "../friends.module.css";
// import { getUsersOnNewPageThunkCreator } from "./../../Redux/reducer-friends";

// export default function PageCounter(props) {
//   const takeNumberCount = useSelector((state) => ({
//     Pages: state.Friends.PagesSize,
//     Count: state.Friends.TotalCount,
//     Current: state.Friends.CurrentPage,
//   }));
//   const dispatch = useDispatch();
//   console.log(takeNumberCount.Pages,takeNumberCount.Count)

//   let onPageChanged = (value) => {
//     dispatch(getUsersOnNewPageThunkCreator(value));
//   };

//   let PagesCount = Math.ceil(takeNumberCount.Count / takeNumberCount.Pages);
//   console.log(PagesCount)
//   let pages = [];
//   let i = 1;
//   for (i = 1; i <= PagesCount; i++) {
//     pages.push(i);
//   }

//   return (
//     <div className={classes.PagesSize}>
//       {pages.map((p) => {
//         return (
//           <span
//             onClick={(e) => {
//               onPageChanged(p);
//             }}
//             className={
//               takeNumberCount.Current === p ? classes.selectedPage : ""
//             }
//           >
//             {p}
//           </span>
//         );
//       })}
//     </div>
//   );
// }
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersOnNewPageThunkCreator } from "./../../Redux/reducer-friends";
import classes from "../friends.module.css";

export default function PageCounter(props) {
  const takeNumberCount = useSelector((state) => ({
    Pages: state.Friends.PagesSize,
    Count: state.Friends.TotalCount,
    Current: state.Friends.CurrentPage,
  }));

  const dispatch = useDispatch();
  const [portionNumber, setPortionNumber] = useState(1);

  const onPageChanged = (page) => {
    dispatch(getUsersOnNewPageThunkCreator(page));
  };

  const PagesCount = Math.ceil(takeNumberCount.Count / takeNumberCount.Pages);

  // Определение порции страниц (по 5 страниц)
  const portionSize = 5;
  const portionCount = Math.ceil(PagesCount / portionSize);
  const leftPageInPortion = (portionNumber - 1) * portionSize + 1;
  const rightPageInPortion = portionNumber * portionSize;

  const pages = [];
  for (let i = leftPageInPortion; i <= rightPageInPortion && i <= PagesCount; i++) {
    pages.push(i);
  }

  const handlePrevPortion = () => {
    setPortionNumber((prev) => prev - 1);
  };

  const handleNextPortion = () => {
    setPortionNumber((prev) => prev + 1);
  };

  return (
    <div className={classes.PagesSize}>
      {portionNumber > 1 && <button onClick={handlePrevPortion}>Prev</button>}
      {pages.map((p) => (
        <span key={p} onClick={() => onPageChanged(p)} className={takeNumberCount.Current === p ? classes.selectedPage : ""}>
          {p}
        </span>
      ))}
      {portionNumber < portionCount && <button onClick={handleNextPortion}>Next</button>}
    </div>
  );
}

