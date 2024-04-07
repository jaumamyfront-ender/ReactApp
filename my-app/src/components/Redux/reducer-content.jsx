// export default ProfileContentReducer;
import { produce } from "immer";
import { GetNewProfileAndShowHim, ProfileAPI } from "../../api/api";
const ADD_POST = "ADD-POST";
const UPDATE_USER = "UPDATE_USER";
const SET_STATUS = "SET_STATUS";
export const ActionCreatorAdd = (valueelement) => {
  return {
    type: ADD_POST,
    PostMessage: valueelement,
 
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
    console.log("no")
    console.log(status)
    return (dispatch) => {
      console.log(status)
      ProfileAPI.putStatus(status).then((response) =>{
        if(response.data.resultCode === 0)
        dispatch(setUserStatus(status))
        }
      
      );
    };
  };


