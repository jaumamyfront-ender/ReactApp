import { produce } from "immer";
import {
  GetUsersForPageChanged,
  GetUsers,
  PushUserOnButtonDisabledFollow,
  DeleteUserOnButtonDisabledUnfollow,
} from "../../api/api";
let initialState = {
  users: [],
  PagesSize: 10,
  TotalCount: 0,
  CurrentPage: 1,
  isFetching: false,
  userId: 2,
  isButtonDisabled: [],
};

const followw = "follow";
const unfolloww = "unfollow";
const setUserss = "pushUsers";
const setCurrentPagee = "currentPage";
const setUsersTotalCountt = "userTotalCount";
const toggleFetchingg = "toggleFetching";
const getId = "getId";
const buttonSwitchDisabler = "buttonSwitchDisabler";

export let follow = (userID) => ({ type: followw, userId: userID });
export const unfollow = (userID) => ({ type: unfolloww, userId: userID });
export const setUsers = (users) => ({ type: setUserss, users: users });
export const setCurrentPage = (CurrentPageFromUI) => ({
  type: setCurrentPagee,
  CurrentPageFrom: CurrentPageFromUI,
});
export const setUsersTotalCount = (totalCount) => ({
  type: setUsersTotalCountt,
  totalCount: totalCount,
});
export const setFetching = (fetchingResult) => ({
  type: toggleFetchingg,
  fetchingResult: fetchingResult,
});
export const getUserAC = (uId) => ({ type: getId, newId: uId });
export const isFetchingButton = (FetchingButton, userid) => ({
  type: buttonSwitchDisabler,
  FetchingButton: FetchingButton,
  userid: userid,
});

const friendReducers = (state = initialState, action) => {
  switch (action.type) {
    case followw:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case unfolloww:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case setUserss:
      return {
        ...state,
        users: [...action.users],
      };
    case setCurrentPagee:
      return {
        ...state,
        CurrentPage: action.CurrentPageFrom,
      };
    case setUsersTotalCountt:
      return {
        ...state,
        TotalCount: action.totalCount,
      };
    case toggleFetchingg:
      return {
        ...state,
        isFetching: action.fetchingResult,
      };
    case getId:
      return {
        ...state,
        userId: action.newId,
      };
    case buttonSwitchDisabler:
      return {
        ...state,
        isButtonDisabled: action.FetchingButton
          ? [...state.isButtonDisabled, action.userid]
          : state.isButtonDisabled.filter((id) => id != action.userid),
      };
    default:
      return state;
  }
};
export default friendReducers;

export const getUsersFromServerThunkCreator = (Pages, Current) => {
  return (dispatch) => {
    dispatch(setFetching(true));
    GetUsers(Current, Pages).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setUsersTotalCount(data.totalCount));
      dispatch(setFetching(false));
    });
  };
};

export const getUsersOnNewPageThunkCreator = (PageNumber, Pages) => {
  return (dispatch) => {
    dispatch(setCurrentPage(PageNumber));
    dispatch(setFetching(true));

    GetUsersForPageChanged(PageNumber, Pages)
      .then((data1) => {
        dispatch(setUsers(data1.items));
      })
      .then(() => dispatch(setFetching(false)))
      .catch((error) => console.error("Error fetching user data:", error));
  };
};
export const DisabledFollow = (userId) => {
  return (dispatch) => {
    dispatch(isFetchingButton(true, userId));
    PushUserOnButtonDisabledFollow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(follow(userId));
      }
      dispatch(isFetchingButton(false, userId));
    });
  };
};
export const DisabledUnfollow = (userId) => {
  return (dispatch) => {
    dispatch(isFetchingButton(true, userId));
    DeleteUserOnButtonDisabledUnfollow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollow(userId));
      }
      dispatch(isFetchingButton(false, userId));
    });
  };
};
