import React from "react";
import { NavLink } from "react-router-dom";

import UserImage from "../../assets/images/user.png";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  if (pages.length >= 10) {
  }

  const unfollowUser = (userId) => {
    props.unfollowUser(userId);
  };

  const followUser = (userId) => {
    props.followUser(userId);
  };

  return (
    <div>
      <div>
        <Stack spacing={2}>
          <Pagination
            count={pages.length}
            defaultPage={1}
            boundaryCount={2}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
                onClick={(e) => props.onPageChanged(item.page)}
                page={item.page}
                selected={item.page === props.currentPage}
              />
            )}
          />
        </Stack>
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
              <div
                className={
                  ` w-[20px] h-[20px] rounded-full border-solid border-[2px]` +
                  (user.followed
                    ? "border-green-700 bg-green-700"
                    : "border-red-700 bg-red-700")
                }
              ></div>
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
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => unfollowUser(user.id)}
                  className="cursor-pointer w-[100px]  bg-white p-[2%] text-[#7268ad] rounded-[5px] float-right clear-both text-[0.8em] border-[2px] border-solid border-[#7268ad]"
                >
                  UnFollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    followUser(user.id);
                  }}
                  className="cursor-pointer w-[100px] bg-[#7268ad] p-[2%] text-white rounded-[5px] float-right clear-both text-[0.8em]"
                >
                  Follow
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
