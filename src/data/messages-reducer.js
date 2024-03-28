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
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages + 1,
            message: action.message,
          },
        ],
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = (message) => ({
  type: SEND_MESSAGE,
  message,
});

export default messageReducer;
