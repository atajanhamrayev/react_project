const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  persons: [
    { id: 1, name: "Atajan" },
    { id: 2, name: "Shirin" },
    { id: 3, name: "Ayka" },
    { id: 4, name: "Merdan" },
    { id: 5, name: "Kako" },
    { id: 6, name: "Tasli" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is" },
    { id: 3, message: "Hi" },
    { id: 4, message: "Hi" },
    { id: 5, message: "Hi" },
    { id: 6, message: "Hi" },
    { id: 7, message: "Hi" },
  ],
  newMessageBody: "",
};

const messageReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }

    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      let stateCopy = { ...state };
      stateCopy.newMessageBody = "";
      stateCopy.messages.push({
        id: stateCopy.messages + 1,
        message: body,
      });
      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default messageReducer;
