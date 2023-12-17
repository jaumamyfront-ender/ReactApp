import ProfileContentReducer from "../components/Reducer/reducer-content.jsx";
import ReducerMessage from "../components/Reducer/reducer-dialogs.jsx";

let store = {
  _state: {
    Profile: {
      AddProfilePost: [{ message: "" }],
      NewPostText: [{ message: "" }],
    },
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
  },
  //RETURN THE STATE STORE /ELEMNETS DATA
  getState() {
    return this._state;
  },
  //METHOD OF RERENDER IF SOME CHANGES
  _RerenderEntireTree() {
    console.log("rerenderr god");
  },
  //METHOD GET THE ALL SITE FROM INDEX
  Rerender(observer) {
    this._RerenderEntireTree = observer;
  },

  dispatch(action) {
    this._state.Profile = ProfileContentReducer(this._state.Profile, action);
    this._state.MessagesPage = ReducerMessage(this._state.MessagesPage, action);
    this._RerenderEntireTree(this._state);
    this.getState();
  },
};

export default store;
