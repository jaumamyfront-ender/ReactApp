import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { spanEdit, spanNoEdit, InputEdit } from "./Profile-Status-html";

const ProfileStatusFunctional = () => {
  const [EditMode, setEditMode] = useState(false);
  const [status, setStatus] = useState("");
  const [IsMe, setIsMe] = useState(true);

  const initialStatus = useSelector((state) => ({
    status: state.Profile.status,
    userId: state.Friends.userId,
  }));

  useEffect(() => {
    if (initialStatus.userId !== 2 && initialStatus.userId > 2) {
      setIsMe(false);
    } else {
      setIsMe(true);
    }

    setStatus(initialStatus.status);
    setEditMode(false);
  }, [initialStatus.userId, initialStatus.status]);

  const activateEditMode = () => {
    setIsMe(false);
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setIsMe(true);
    setEditMode(false);
  };

  const setTextStatus = (e) => {
    const value = e.currentTarget.value;
    setStatus(value);
  };

  const getContainerJsx = (spanEditComponent, spanNoEditComponent, inputEditComponent) => {
    return <div>{IsMe ? spanEditComponent({ activateEditMode, status }) : EditMode ? inputEditComponent({ deactivateEditMode, setTextStatus, status }) : spanNoEditComponent(status)}</div>;
  };

  return <div>{getContainerJsx(spanEdit, spanNoEdit, InputEdit)}</div>;
};

export default ProfileStatusFunctional;
