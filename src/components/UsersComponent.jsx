import React from "react";

const UsersComponent = (props) => {
  let user = props.user;


  return (
    <div className="flex flex-row w-full items-center justify-around mb-[5%] bg-[#f9f9f9] p-[5%] gap-[2%]">
      <div className="image w-[15%]">
        <img
          src={user.photoURL}
          alt="inter"
          className="float-left mr-[2%] rounded-[5px] border-solid border-[5px] border-[#dad7d5]"
        />
      </div>
      <div className="flex flex-col w-[60%]">
        <h2 className="text-[#136cb2] leading-0">{user.fullName}</h2>
        <p>{user.status}</p>
        <p>
          {user.location.cityName}, {user.location.country}
        </p>
      </div>
      <div className="button  w-[15%]">
        {user.followed ? (
          <button
            onClick={() => {
              props.unfollow(user.id);
            }}
            className="cursor-pointer w-[100px] bg-[#7268ad] p-[2%] text-white rounded-[5px] float-right clear-both text-[0.8em]"
          >
            Follow
          </button>
        ) : (
          <button
            onClick={() => {
              props.follow(user.id);
            }}
            className="cursor-pointer w-[100px]  bg-white p-[2%] text-[#7268ad] rounded-[5px] float-right clear-both text-[0.8em] border-[2px] border-solid border-[#7268ad]"
          >
            Unfollow
          </button>
        )}
      </div>
    </div>
  );
};

export default UsersComponent;
