import { produce } from "immer";

const AddMessage = "SEND_MESSAGE";
const UpdateNewMessageText = "UPDATE_NEW_MESSAGE_BODY";

let initialState = {
  dialogsDataUsersList: [
    { id: 1, name: "dimych" },
    { id: 2, name: "sveta" },
  ],
  dialogsDataUsersMessage: [{ messages: "johny,its imposible" }],
  NewMessageBody: [{ message: "111" }],
};

const ReducerMessage = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case AddMessage:
        draft.dialogsDataUsersMessage.push({
          messages: action.newobjectmessage,
        });
        draft.NewMessageBody[0].message = "";
        break;
      case UpdateNewMessageText:
        draft.NewMessageBody[0].message = action.newobjectmessage;
        break;
      default:
        // Handle default case or do nothing
        break;
    }
  });
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
