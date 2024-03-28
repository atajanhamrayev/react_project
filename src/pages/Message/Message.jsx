import React from "react";
import MessagesPersons from "../../components/Messages/MessagesPersons";
import Messages from "../../components/Messages/Messages";
import { Field, reduxForm } from "redux-form";

const Message = (props) => {
  let addMessage = (message) => {
    props.addMessage(message.newMessageBody);
  };

  return (
    <>
      <div className="flex flex-row gap-[30px] mt-[30px] w-[100%]">
        <MessagesPersons persons={props.persons} />
        <div className="w-[80%] flex flex-col gap-2">
          <Messages messages={props.messages} />
          <AddMessageFormRedux onSubmit={addMessage} />
        </div>
      </div>
    </>
  );
};

const AddMessageForm = (props) => {
  return (
    <form
      onSubmit={props.handleSubmit}
      className="w-full   flex flex-row gap-[5px] items-center justify-center"
    >
      <Field
        component="textarea"
        name="newMessageBody"
        placeholder="Enter your message"
        className="w-[80%] flex items-center justify-start pl-[10px] h-[30px]"
      />

      <button className="w-[20%] bg-[#299524] text-white h-full">Send</button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "AddMessageForm" })(
  AddMessageForm
);

export default Message;
