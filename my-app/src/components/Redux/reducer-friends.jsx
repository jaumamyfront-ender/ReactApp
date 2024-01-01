import { produce } from "immer";
let initialState = {
  users: [
    // {
    //   id: 1,
    //   fullName: "",
    //   location: { city: "", country: "" },
    //   followed: true,
    //   photoUrl: "",
    //   comment: "",
    // },
  ],
};
const follow = "follow";
const unfollow = "unfollow";
const setUsers = "pushUsers";
export let followAC = (userID) => ({ type: follow, userId: userID });
export const unfollowAC = (userID) => ({ type: unfollow, userId: userID });
export const setUsersAC = (users) => ({ type: setUsers, users: users });
const friendReducers = (state = initialState, action) => {
  switch (action.type) {
    case follow:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case unfollow:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case setUsers:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};
export default friendReducers;
