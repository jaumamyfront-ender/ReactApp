import React from "react";
import { UpdateUserStatusTHC } from "../../Redux/reducer-content";
import { useDispatch } from "react-redux";

export const spanEdit = ({ activateEditMode, status }) => {
  return (
    <div>
      <span onDoubleClick={activateEditMode}>{status || "-------"}</span>
    </div>
  );
};

export const spanNoEdit = (status) => {
  return (
    <div>
      <span>{status || "-------"}</span>
    </div>
  );
};

export const InputEdit = ({ deactivateEditMode, setTextStatus, status }) => {
  const dispatch = useDispatch();
  dispatch(UpdateUserStatusTHC(status));
  return (
    <div>
      <input
        type="text"
        onBlur={() => {
          deactivateEditMode();
          dispatch();
        }}
        onChange={(e) => setTextStatus(e)}
        value={status}
      />
    </div>
  );
};
