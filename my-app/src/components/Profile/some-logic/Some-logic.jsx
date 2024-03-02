import React from "react";
import {
  ActionCreatorAdd,
  ActionCreatorUpdate,
} from "../../Redux/reducer-content";
import { useDispatch, useSelector } from "react-redux";

function Logic(props) {
  const GetValueFromRef = React.createRef();

  const dispatch = useDispatch();

  const TextAreaValueContent = useSelector(
    (state) => state.Profile.NewPostText[0].message
  );

  const TextAreaNewValuefromState = TextAreaValueContent;

  let addPost = (value) => {
    // let valueelement = GetValueFromRef.current.value;
    dispatch(ActionCreatorAdd(value));
  };

  let onPostChange = () => {
    let valueelement = GetValueFromRef.current.value;
    dispatch(ActionCreatorUpdate(valueelement));
  };

  return { TextAreaNewValuefromState, GetValueFromRef, addPost, onPostChange };
}
export default Logic;
