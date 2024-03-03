import React from "react";
import {
  ActionCreatorAdd
} from "../../Redux/reducer-content";
import { useDispatch} from "react-redux";

function Logic(props) {


  const dispatch = useDispatch();

 
  let addPost = (value) => {
 
    dispatch(ActionCreatorAdd(value));
  };


  return { addPost};
}
export default Logic;
