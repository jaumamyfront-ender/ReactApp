// import { produce } from "immer";
// const AddMessage = "SEND_MESSAGE";
// const UpdateNewMessageText = "UPDATE_NEW_MESSAGE_BODY";

// let initialState = {
//   dialogsDataUsersList: [
//     { id: 1, name: "dimych" },
//     { id: 2, name: "sveta" },
//     { id: 3, name: "tanja" },
//     { id: 4, name: "andrey" },
//     { id: 5, name: "taras" },
//     { id: 6, name: "bogdan" },
//     { id: 7, name: "veraa" },
//     { id: 8, name: "lera" },
//     { id: 9, name: "sergei" },
//     { id: 0, name: "danil" },
//   ],
//   dialogsDataUsersMessage: [{ messages: "whatt" }],
//   NewMessageBody: [{ messages: "s" }],
// };

// const ReducerMessage = (state = initialState, action) => {
//   return produce(state, (draft) => {
//     switch (action.type) {
//       case UPDATE_NEW_MESSAGE_BODY:
//         draft.NewMessageBody = action.newobjectmessage;
//         break;
//       case SEND_MESSAGE:
//         draft.dialogsDataUsersMessage.messages = action.newobjectmessage;
//     }
//   });
// };

// export let ActionCreatorAddMessage = (newobjectmessage) => {
//   return {
//     type: AddMessage,
//     newobjectmessage: newobjectmessage,
//   };
// };
// export let ActionCreatorReadMessage = (newobjectmessage) => {
//   return {
//     type: UpdateNewMessageText,
//     newobjectmessage: newobjectmessage,
//   };
// };
// export default ReducerMessage;
import { produce } from "immer";

const AddMessage = "SEND_MESSAGE";
const UpdateNewMessageText = "UPDATE_NEW_MESSAGE_BODY";

let initialState = {
  dialogsDataUsersList: [
    { id: 1, name: "dimych" },
    { id: 2, name: "sveta" },
    // ... (other users)
  ],
  dialogsDataUsersMessage: [
    { messages: "johny,its imposible" },
    // ... (other messages)
  ],
  NewMessageBody: "s", // Directly store the message string
};

const ReducerMessage = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case UpdateNewMessageText:
        draft.NewMessageBody = action.newobjectmessage;
        break;
      case AddMessage:
        draft.dialogsDataUsersMessage.push({
          messages: action.newobjectmessage,
        });
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
