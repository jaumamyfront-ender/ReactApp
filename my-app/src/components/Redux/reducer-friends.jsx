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
  PagesSize: 10,
  TotalCount: 30,
  CurrentPage: 1,
};
const follow = "follow";
const unfollow = "unfollow";
const setUsers = "pushUsers";
const setCurrentPage = "currentPage";
export let followAC = (userID) => ({ type: follow, userId: userID });
export const unfollowAC = (userID) => ({ type: unfollow, userId: userID });
export const setUsersAC = (users) => ({ type: setUsers, users: users });
export const setCurrentPageAC = (CurrentPageFromUI) => ({
  type: setCurrentPage,
  CurrentPageFrom: CurrentPageFromUI,
});
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
        users: [...action.users],
      };
    case setCurrentPage:
      return {
        ...state,
        CurrentPage: action.CurrentPageFrom,
      };
    default:
      return state;
  }
};
export default friendReducers;
