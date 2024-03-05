import React from "react";

const MessagesPersons = (props) => {
  return (
    <>
      <div className="w-[20%] text-left mx-0  border-solid border-[1px] border-[#f2f2f2] rounded-[5px] bg-[#f9f9f9]">
        <h2 className="text-[#136cb2] text-center">Persons</h2>
        <ul className="m-0">
          {props.persons.map((person) => {
            return (
              <li
                key={person.id}
                className="ml-[15px] list-none cursor-pointer hover:underline"
              >
                {person.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MessagesPersons;
