import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ProfileContentReducer from "../Redux/reducer-content.jsx";
import ReducerMessage from "../Redux/reducer-dialogs.jsx";
import friendReducers from "./reducer-friends.jsx";
import Auth from "./reducer-auth.jsx";
let reducer = combineReducers({
  Profile: ProfileContentReducer,
  MessagesPage: ReducerMessage,
  Friends: friendReducers,
  Auth: Auth,
});
let store = configureStore({ reducer });
window.store = store;
export default store;
console.log("Current State:", store.getState());
