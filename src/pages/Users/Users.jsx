import React from "react";
import axios from "axios";

import UsersComponent from "./../../components/UsersComponent";

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };
  return (
    <div>
      <button
        onClick={getUsers}
        className="border-[2px] border-solid border-[#7268ad] w-[100px] hover:bg-[#7268ad] hover:text-white"
      >
        Get Users
      </button>
      {props.users.map((user) => {
        return (
          <UsersComponent
            user={user}
            key={user.id}
            follow={props.follow}
            unfollow={props.unfollow}
          />
        );
      })}
    </div>
  );
};

export default Users;
