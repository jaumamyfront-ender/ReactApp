import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ProfileContentReducer from "./reducer-content.jsx";
import ReducerMessage from "./reducer-dialogs.jsx";
let reducer = combineReducers({
  Profile: ProfileContentReducer,
  MessagesPage: ReducerMessage,
});
let store = configureStore({ reducer });

export default store;
console.log("Current State:", store.getState());
