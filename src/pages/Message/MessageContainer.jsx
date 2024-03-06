import { connect } from "react-redux";
import Messages from "./Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../data/messages-reducer";

let mapStateToProps = (state) => {
  return {
    persons: state.messagesPage.persons,
    messages: state.messagesPage.messages,
    newMessageBody: state.messagesPage.newMessageBody,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(sendMessageCreator());
    },
    onMessageChange: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessageContainer;
