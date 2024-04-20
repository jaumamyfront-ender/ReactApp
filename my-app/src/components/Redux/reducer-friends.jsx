import { GetUsersForPageChanged, GetUsers, PushUserOnButtonDisabledFollow, DeleteUserOnButtonDisabledUnfollow } from "../../api/api";
import { updateObjectinArray } from "../utilities/helpers(redux-reducers)/helper";
let initialState = {
  users: [],
  PagesSize: 10,
  TotalCount: 0,
  CurrentPage: 1,
  isFetching: false,
  userId: 2,
  isButtonDisabled: [],
};

const followw = "users/follow";
const unfolloww = "users/unfollow";
const setUserss = "users/pushUsers";
const setCurrentPagee = "users/currentPage";
const setUsersTotalCountt = "users/userTotalCount";
const getId = "users/getId";

const toggleFetchingg = "users/toggleFetching"; //to show a preloader if users is loading from server
const buttonSwitchDisabler = "users/buttonSwitchDisabler"; //disabler button when we click on button ana wait foe response from server

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
        users: updateObjectinArray(state.users, action.userId, "id", { followed: true }),

      };
    case unfolloww:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false }; //value followed is to show you a type of uiButton
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
    case getId:
      return {
        ...state,
        userId: action.newId,
      };
    case toggleFetchingg:
      return {
        ...state,
        isFetching: action.fetchingResult,
      };

    case buttonSwitchDisabler:
      return {
        ...state,
        isButtonDisabled: action.FetchingButton ? [...state.isButtonDisabled, action.userid] : state.isButtonDisabled.filter((id) => id != action.userid),
      };
    default:
      return state;
  }
};
export default friendReducers;

export const getUsersFromServerThunkCreator = (Pages, Current) => {
  return async (dispatch) => {
    dispatch(setFetching(true));
    let data = await GetUsers(Current, Pages);
    dispatch(setUsers(data.items));
    dispatch(setUsersTotalCount(data.totalCount));
    dispatch(setFetching(false));
  };
};

export const getUsersOnNewPageThunkCreator = (PageNumber, Pages) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(PageNumber));
    dispatch(setFetching(true));

    let data = await GetUsersForPageChanged(PageNumber, Pages);
    if (data) {
      dispatch(setUsers(data.items));
      dispatch(setFetching(false));
    }
  };
};
export const DisabledFollow = (userId) => {
  return async (dispatch) => {
    dispatch(isFetchingButton(true, userId));
    let data = await PushUserOnButtonDisabledFollow(userId);
    if (data.data.resultCode === 0) {
      dispatch(follow(userId));
      dispatch(isFetchingButton(false, userId));
    }
  };
};

export const DisabledUnfollow = (userId) => {
  return async (dispatch) => {
    dispatch(isFetchingButton(true, userId));
    const response = await DeleteUserOnButtonDisabledUnfollow(userId);
    if (response.data.resultCode === 0) {
      dispatch(unfollow(userId));
    }
    dispatch(isFetchingButton(false, userId));
  };
};
