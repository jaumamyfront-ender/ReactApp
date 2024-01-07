// export default ProfileContentReducer;
import { produce } from "immer";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UpdateNewPostText";
const UPDATE_USER = "UPDATE_USER";
export const ActionCreatorAdd = (valueelement) => {
  return {
    type: ADD_POST,
    PostMessage: valueelement,
  };
};

export const ActionCreatorUpdate = (valueelement) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: valueelement,
  };
};
export const setUserToStateFromServer = (data) => ({
  type: UPDATE_USER,
  data: data,
});

let initialState = {
  AddProfilePost: [{ message: "" }],
  NewPostText: [{ message: "123" }],
  Profile: null,
};

const ProfileContentReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_POST:
        draft.AddProfilePost.push({ message: action.PostMessage });
        draft.NewPostText[0].message = "";
        break;

      case UPDATE_NEW_POST_TEXT:
        draft.NewPostText[0].message = action.newText;
        break;
      case UPDATE_USER:
        draft.Profile = action.data;
        break;

      default:
        break;
    }
  });
};

export default ProfileContentReducer;
