import React from "react";
import { useDispatch } from "react-redux";
import { getUserAC } from "../../Redux/reducer-friends";

// Создайте функциональный компонент или пользовательский хук
function useGetID() {
  const dispatch = useDispatch();

  // Перенесите логику внутрь функционального компонента или пользовательского хука
  const getID = (value) => {
    dispatch(getUserAC(value));
  };

  return getID;
}

export default useGetID;
