// const ADD_POST = "ADD-POST";
// const UpdateNewPostText = "UpdateNewPostText";
// let initialState = {
//   AddProfilePost: [{ message: "1" }],
//   NewPostText: [{ message: "" }],
// };
// const ProfileContentReducer = (state = initialState, action) => {
//   if (action.type === "ADD-POST") {
//     let newPost = {
//       message: state.NewPostText,
//     };
//     state.AddProfilePost.push(newPost);
//   } else if (action.type === "UpdateNewPostText") {
//     {
//       state.NewPostText = action.newText;
//     }
//   }
//   return state;
// };
// export let ActionCreatorAdd = (valueelement) => {
//   return {
//     type: ADD_POST,
//     PostMessage: valueelement,
//   };
// };
// export let ActionCreatorDelete = () => {
//   return {
//     type: UpdateNewPostText,
//     newText: "",
//   };
// };
// export let ActionCreatorUpdate = (valueelement) => {
//   return {
//     type: UpdateNewPostText,
//     newText: valueelement,
//   };
// };
// export default ProfileContentReducer;
import { produce } from "immer";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UpdateNewPostText";

let initialState = {
  AddProfilePost: [{ message: "1" }],
  NewPostText: [{ message: "12" }],
};

const ProfileContentReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_POST:
        draft.AddProfilePost.push({ message: draft.NewPostText[0].message });
        break;

      case UPDATE_NEW_POST_TEXT:
        draft.NewPostText[0].message = action.newText;
        break;

      // Add other cases as needed

      default:
        break;
    }
  });
};

export const ActionCreatorAdd = (valueelement) => {
  return {
    type: ADD_POST,
    PostMessage: valueelement,
  };
};

export const ActionCreatorDelete = () => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: "",
  };
};

export const ActionCreatorUpdate = (valueelement) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: valueelement,
  };
};

export default ProfileContentReducer;
