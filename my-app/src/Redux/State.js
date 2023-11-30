// let state = {
//   MessagesPage: {
//     dialogsDataUsersList: [
//       { id: 1, name: "dimych" },
//       { id: 2, name: "sveta" },
//       { id: 3, name: "tanja" },
//       { id: 4, name: "andrey" },
//       { id: 5, name: "taras" },
//       { id: 6, name: "bogdan" },
//       { id: 7, name: "veraa" },
//       { id: 8, name: "lera" },
//       { id: 9, name: "sergei" },
//       { id: 0, name: "danil" },
//     ],

//     dialogsDataUsersMessage: [
//       {
//         id: 0,
//         message: "i am your friend,bro,what are you thinking about this",
//         name: "dimon ",
//       },
//       { id: 1, message: "yoooooooooooooooooooooo", name: "andrew" },
//     ],
//   },
//   Profile: {
//     AddProfilePost: [{ message: "" }],
//     NewPostText: "what",
//   },
// };
// //this function push the value from UI to state
// export let addPost = (PostMessage) => {
//   let newPost = {
//     message: PostMessage,
//   };
//   // state.MessagesPage.dialogsDataUsersMessage.push(newPost);
//   state.Profile.AddProfilePost.push(newPost);
//   RerenderEntireTree(state);
// };

// export let updateNewPostText = (newText) => {
//   state.Profile.NewPostText = newText;
//   RerenderEntireTree(state);
// };
// let RerenderEntireTree = () => {
//   console.log("rerender god");
// };
// export const Rerender = (observer) => {
//   RerenderEntireTree = observer;
// };

// export default state;

//function style
//oop style
//this object-->

let store = {
  _state: {
    MessagesPage: {
      dialogsDataUsersList: [
        { id: 1, name: "dimych" },
        { id: 2, name: "sveta" },
        { id: 3, name: "tanja" },
        { id: 4, name: "andrey" },
        { id: 5, name: "taras" },
        { id: 6, name: "bogdan" },
        { id: 7, name: "veraa" },
        { id: 8, name: "lera" },
        { id: 9, name: "sergei" },
        { id: 0, name: "danil" },
      ],
      dialogsDataUsersMessage: [{ messages: "whatt" }],
      NewMessageBody: [{ messages: "s" }],
    },

    Profile: {
      AddProfilePost: [{ message: "" }],
      NewPostText: [{ message: "" }],
    },
  },
  //RETURN THE STATE STORE /ELEMNETS DATA
  getState() {
    return this._state;
  },
  //METHOD OF RERENDER IF SOME CHANGES
  _RerenderEntireTree() {
    console.log("rerender god");
  },
  //METHOD GET THE ALL SITE FROM INDEX
  Rerender(observer) {
    this._RerenderEntireTree = observer;
  },
  //METHOD BIG ONE DISPTACH(AND WITH ACTION SWITCH CASE(IN UPPER WITH OBJECTS ACTION))
  dispatch(action) {
    //dispatch case logic for componet Content
    if (action.type === "ADD-POST") {
      let newPost = {
        message: action.PostMessage,
      };
      this._state.Profile.AddProfilePost.push(newPost);
      this._RerenderEntireTree(this._state);
    } else if (action.type === "UpdateNewPostText") {
      {
        this._state.Profile.NewPostText = action.newText;
        this._RerenderEntireTree(this._state);
      } //dispatch logic case for component Dialogs
    } else if (action.type === "UPDATE_NEW_MESSAGE_BODY") {
      {
        this._state.MessagesPage.NewMessageBody = action.newobjectmessage;
        this._RerenderEntireTree(this._state);
      }
    } else if (action.type === "SEND_MESSAGE") {
      let body = this._state.MessagesPage.NewMessageBody;
      // this._state.MessagesPage.NewMessageBody = "";
      this._state.MessagesPage.dialogsDataUsersMessage.push([
        {
          message: body,
        },
      ]);
      this._RerenderEntireTree(this._state);
    }
  },
};

//COMPONENT PROFILE OBJECTS EXPORT ACTION TWO TYPES(1 TYPE-NO ERROR WITH TYPING IN STATE)(2-EXPORT ACTION TO USESIN COMPONENT IN DISPATCH)
const ADD_POST = "ADD-POST";
const UpdateNewPostText = "UpdateNewPostText";
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
//ACTION FOR MESSAGES COMPONENT
const AddMessage = "SEND_MESSAGE";
const UpdateNewMessageText = "UPDATE_NEW_MESSAGE_BODY";
export let ActionCreatorAddMessage = (newobjectmessage) => {
  return {
    type: AddMessage,
    newobjectmessage: newobjectmessage,
  };
};
export let ActionCreatorReadMessage = (newobjectmessage) => {
  return {
    type: UpdateNewMessageText,
    newobjectmessage: newobjectmessage,
  };
};
let checkthisshit = (Anew) => {
  if ((Anew = "")) {
    console.log("yesss");
  } else {
    console.log("no motherfucker");
  }
};
console.log(checkthisshit(ActionCreatorReadMessage));

export default store;
