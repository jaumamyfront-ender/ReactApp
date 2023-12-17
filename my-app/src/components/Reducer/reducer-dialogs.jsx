const AddMessage = "SEND_MESSAGE";
const UpdateNewMessageText = "UPDATE_NEW_MESSAGE_BODY";
let initialState = {
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
};
const ReducerMessage = (state = initialState, action) => {
  if (action.type === "UPDATE_NEW_MESSAGE_BODY") {
    {
      state.NewMessageBody = action.newobjectmessage;
    }
  } else if (action.type === "SEND_MESSAGE") {
    let PushPost = {
      messages: action.newobjectmessage,
    };

    state.NewMessageBody = "";
    state.dialogsDataUsersMessage.push(PushPost);
  }
  return state;
};

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
export default ReducerMessage;
