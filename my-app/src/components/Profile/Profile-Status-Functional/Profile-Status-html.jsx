import React from "react";


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

export const InputEdit = ({ deactivateEditMode, setTextStatus, status,sendStatus }) => {

  return (
    <div>
      <input
        type="text"
        onBlur={() => {
          deactivateEditMode();
          sendStatus(status)
         
        }}
        onChange={(e) => setTextStatus(e)}
        value={status}
      />
    </div>
  );
};
   
     