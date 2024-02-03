import React from "react";
import { useDispatch } from "react-redux";
import { getUserAC } from "../../Redux/reducer-friends";

export default function Pages(props) {
  let PagesCount = Math.ceil(props.count / props.pages);
  let pages = [];
  let i = 1;
  for (i = 1; i <= PagesCount; i++) {
    pages.push(i);
  }

  return { pages };
}

// export const Get = (value) => {
//   let dispatch = useDispatch();
//   let getfuckingid = (value) => {
//     dispatch(getUserAC(value));
//   };
//   debugger;
//   return getfuckingid(value);
// };
export const Get = (value) => {
  let dispatch = useDispatch();

  let fuckyoudispatch = (value) => {
    dispatch(getUserAC(value));
  };
  return fuckyoudispatch(value);
};
