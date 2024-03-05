import React from "react";
import MessagesPersons from "../../components/Messages/MessagesPersons";
import Messages from "../../components/Messages/Messages";

const Message = (props) => {
  let newMessageBody = React.createRef();
  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let body = newMessageBody.current.value;
    props.onMessageChange(body);
  };

  return (
    <>
      <div className="flex flex-row gap-[30px] mt-[30px] w-[100%]">
        <MessagesPersons persons={props.persons} />
        <div className="w-[80%] flex flex-col gap-2">
          <Messages messages={props.messages} />
          <div className="w-full   flex flex-row gap-[5px] items-center justify-center">
            <textarea
              className="w-[80%] flex items-center justify-start pl-[10px] h-[30px]"
              value={props.newMessageBody}
              placeholder="Enter your message"
              ref={newMessageBody}
              onChange={onMessageChange}
            ></textarea>
            <button
              className="w-[20%] bg-[#299524] text-white h-full"
              onClick={addMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
