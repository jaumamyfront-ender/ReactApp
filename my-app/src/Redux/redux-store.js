import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ProfileContentReducer from "../components/Redux/reducer-content";
import ReducerMessage from "../components/Redux/reducer-dialogs";

let reducer = combineReducers({
  Profile: ProfileContentReducer,
  MessagesPage: ReducerMessage,
});
let store = configureStore({ reducer });

export default store;
console.log("Current State:", store.getState());
