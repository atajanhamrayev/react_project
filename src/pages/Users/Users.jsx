import React from "react";
import UserImage from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  if (pages.length >= 10) {
  }

  return (
    <div>
      <div>
        {/* {pages.map((p) => {
        return (
          <span
            onClick={(e) => this.onPageChanged(p)}
            className={props.currentPage === p && "font-bold"}
          >
            {" "}
            {p}{" "}
          </span>
        );
      })} */}
        <span
          onClick={(e) => props.onPageChanged(1)}
          className={props.currentPage === 1 && "font-bold"}
        >
          1
        </span>

        <span
          onClick={(e) => props.onPageChanged(2)}
          className={props.currentPage === 2 && "font-bold"}
        >
          2
        </span>

        <span
          onClick={(e) => props.onPageChanged(3)}
          className={props.currentPage === 3 && "font-bold"}
        >
          3
        </span>

        <span
          onClick={(e) => props.onPageChanged(4)}
          className={props.currentPage === 4 && "font-bold"}
        >
          4
        </span>
      </div>

      {props.users.map((user) => {
        return (
          <div
            key={user.id}
            className="flex flex-row w-full items-center justify-around mb-[5%] bg-[#f9f9f9] p-[5%] gap-[2%]"
          >
            <div className="image w-[15%]">
              <NavLink to={`/profile/` + user.id}>
                <img
                  src={
                    user.photos.small != null ? user.photos.small : UserImage
                  }
                  alt="inter"
                  className="float-left mr-[2%] rounded-[5px] border-solid border-[5px] border-[#dad7d5]"
                />
              </NavLink>
            </div>

            <div className="flex flex-col w-[60%]">
              <h2 className="text-[#136cb2] leading-0">{user.name}</h2>
              <p>{user.status}</p>
              {/* <p>
        {user.location.cityName}, {user.location.country}
      </p> */}
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
      })}
    </div>
  );
};

export default Users;
