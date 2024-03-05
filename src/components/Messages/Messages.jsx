import React from "react";

const Messages = (props) => {
  return (
    <>
      <div className="w-full text-left mx-0  border-solid border-[1px] border-[#f4f0f0] rounded-[5px] bg-[#f9f9f9]">
        <h2 className="text-[#136cb2] text-center">Messages</h2>
        <ul className="m-0">
          {props.messages.map((message) => {
            return (
              <li key={message.id} className="ml-[15px]">
                {message.message}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Messages;
