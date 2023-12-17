const AddMessage = "SEND_MESSAGE";
const UpdateNewMessageText = "UPDATE_NEW_MESSAGE_BODY";
const ReducerMessage = (state, action) => {
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
