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
      AddProfilePost: [{ message: "1" }],
      NewPostText: [{ message: "whatt" }],
    },
  },
  getState() {
    return this._state;
  },

  addPost(PostMessage) {
    let newPost = {
      message: PostMessage,
    };
    this._state.Profile.AddProfilePost.push(newPost);
    this._RerenderEntireTree(this._state);
  },
  updateNewPostText(newText) {
    this._state.Profile.NewPostText = newText;
    this._RerenderEntireTree(this.state);
  },
  _RerenderEntireTree() {
    console.log("rerender god");
  },
  Rerender(observer) {
    this._RerenderEntireTree = observer;
  },
};
export default store;
