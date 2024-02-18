// export default ProfileContentReducer;
import { produce } from "immer";
import { GetNewProfileAndShowHim, ProfileAPI } from "../../api/api";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UpdateNewPostText";
const UPDATE_USER = "UPDATE_USER";
const SET_STATUS = "SET_STATUS";
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
export const setUserStatus = (status) => ({
  type: SET_STATUS,
  status: status,
});

let initialState = {
  AddProfilePost: [{ message: "" }],
  NewPostText: [{ message: "123" }],
  Profile: {
    photos: {},
  },
  status: "",
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
      case SET_STATUS:
        draft.status = action.status;
        break

      default:
        break;
    }
  });
};


export default ProfileContentReducer;

export const GetUserProfileTHC =(userId)=>{
  return(dispatch)=>{
    GetNewProfileAndShowHim(userId).then((response) => 
        dispatch(setUserToStateFromServer(response.data)));
      }

  }
  export const GetUserStatusTHC = (userId) => {

    return (dispatch) => {
      ProfileAPI.getStatus(userId).then((response) =>
     
        dispatch(setUserStatus(response.data))
        
      );
    };
  };
  export const UpdateUserStatusTHC = (status) => {
    return (dispatch) => {
      ProfileAPI.putStatus(status).then((response) =>{
        if(response.data.resultCode === 0)
        dispatch(setUserStatus(status))
        }
      
      );
    };
  };


