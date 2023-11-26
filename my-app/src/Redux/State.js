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
export let ActionCreatorAdd = (valueelement) => {
  return {
    type: "ADD-POST",
    PostMessage: valueelement,
  };
};
export let ActionCreatorDelete = () => {
  return {
    type: "UpdateNewPostText",
    newText: "",
  };
};
export let ActionCreatorUpdate = (valueelement) => {
  return {
    type: "UpdateNewPostText",
    newText: valueelement,
  };
};
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
      dialogsDataUsersMessage: [
        {
          id: 0,
          message: "i am your friend,bro,what are you thinking about this",
          name: "dimon ",
        },
        { id: 1, message: "yoooooooooooooooooooooo", name: "andrew" },
      ],
    },

    Profile: {
      AddProfilePost: [{ message: "" }],
      NewPostText: [{ message: "" }],
    },
  },
  getState() {
    return this._state;
  },

  _RerenderEntireTree() {
    console.log("rerender god");
  },
  Rerender(observer) {
    this._RerenderEntireTree = observer;
  },

  dispatch(action) {
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
      }
    }
  },
};

export default store;
