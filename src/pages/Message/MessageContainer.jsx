import React from "react";
import Message from "./Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../data/messages-reducer";

const MessageContainer = (props) => {
  let state = props.store.getState().messagesPage;

  let addMessage = () => {
    props.dispatch(sendMessageCreator());
  };

  let onMessageChange = (body) => {
    props.dispatch(updateNewMessageBodyCreator(body));
  };
  return (
    <div>
      <Message
        persons={state.persons}
        messages={state.messages}
        addMessage={addMessage}
        onMessageChange={onMessageChange}
        newMessageBody={state.newMessageBody}
      />
    </div>
  );
};

export default MessageContainer;
