import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import ProfileContentReducer from "../Redux/reducer-content.jsx";
import ReducerMessage from "../Redux/reducer-dialogs.jsx";
import friendReducers from "./reducer-friends.jsx";
import Auth from "./reducer-auth.jsx";
import { thunk } from "redux-thunk";

let reducer = combineReducers({
  Profile: ProfileContentReducer,
  MessagesPage: ReducerMessage,
  Friends: friendReducers,
  Auth: Auth,
});
let store = configureStore({ reducer }, applyMiddleware(thunk));
window.store = store;
export default store;

console.log("Current State:", store.getState());
