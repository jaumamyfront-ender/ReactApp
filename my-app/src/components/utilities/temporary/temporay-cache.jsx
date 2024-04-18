// import { useEffect, useState } from "react";
// import React from "react";
// import { spanEdit, spanNoEdit, inputEdit } from "./Profile-Status-html";
// import { useSelector } from "react-redux";
// import { UpdateUserStatusTHC } from "../../Redux/reducer-content";

// const ProfileStatusFunctional = () => {
//     const [EditMode, setEditMode] = useState(false);
//     const [status, setStatus] = useState("");
//     const [IsMe, setIsMe] = useState(false);

//   const initialStatus = useSelector((state) => ({
//     status: state.Profile.status,
//     userId: state.Friends.userId,
//   }));

//   useEffect(() => {
//     if (initialStatus.userId !== 2 && initialStatus.userId > 2) {
//       setIsMe(true);
//     }
//     setStatus(initialStatus.status);
//     setEditMode(false)
//   }, []);

//   const activateEditMode = () => {
//     setIsMe(false);
//     setEditMode(true);
//   };

//   const deactivateEditMode = () => {
//     setIsMe(true);
//     setEditMode(false);
//   };

//   const setTextStatus = (e) => {
//     const value = e.currentTarget.value;
//     setStatus(value);
//   };

//   const getContainerJsx = (spanEdit, spanNoEdit, inputEdit) => {

//     if (IsMe === true) {
//       return spanEdit;
//     } else if (IsMe === false && EditMode === false) {
//       return spanNoEdit;
//     } else if (EditMode === true) return inputEdit;
//   };
//   return <div>{getContainerJsx(spanEdit(activateEditMode, status), spanNoEdit(status), inputEdit(deactivateEditMode(), UpdateUserStatusTHC(), setTextStatus(), status))}</div>;
// };

// export default ProfileStatusFunctional;
///////////////////////////////////////////////////
// import React from "react";

// export const spanEdit = ({ activateEditMode, status }) => {
//   return (
//     <div>
//       <span onDoubleClick={activateEditMode}>{status || "-------"}</span>
//     </div>
//   );
// };

// export const spanNoEdit = (status) => {
//   return (
//     <div>
//       <span>{status || "-------"}</span>
//     </div>
//   );
// };

// export const inputEdit = ({ deactivateEditMode, setTextStatus, status, UpdateUserStatusTHC }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         onBlur={() => {
//           deactivateEditMode();
//           UpdateUserStatusTHC(status); // Предположим, что это функция Redux для обновления статуса пользователя
//         }}
//         onChange={(e) => setTextStatus(e)}
//         value={status}
//       />
//     </div>
//   );
// };

        // UserStatus={
        //   <Status
        //     status={this.props.status}
        //     updateStatus={this.props.UpdateUserStatusTHC}
        //     userId={this.props.userId}
        //   />
        // }

  //         userId: state.Friends.userId,
  // status:state.Profile.status,