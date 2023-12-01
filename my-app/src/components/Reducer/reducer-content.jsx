const ADD_POST = "ADD-POST";
const UpdateNewPostText = "UpdateNewPostText";
const ProfileContentReducer = (state, action) => {
  console.log(state);
  if (action.type === "ADD-POST") {
    let newPost = {
      message: state.NewPostText,
    };
    state.AddProfilePost.push(newPost);
  } else if (action.type === "UpdateNewPostText") {
    {
      state.NewPostText = action.newText;
    }
    return state;
  }
};
export let ActionCreatorAdd = (valueelement) => {
  return {
    type: ADD_POST,
    PostMessage: valueelement,
  };
};
export let ActionCreatorDelete = () => {
  return {
    type: UpdateNewPostText,
    newText: "",
  };
};
export let ActionCreatorUpdate = (valueelement) => {
  return {
    type: UpdateNewPostText,
    newText: valueelement,
  };
};
export default ProfileContentReducer;
