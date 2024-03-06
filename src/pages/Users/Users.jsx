import React from "react";
import UsersComponent from "./../../components/UsersComponent";

const Users = (props) => {
  if (props.users.length === 0) {
    debugger;
    props.setUsers([
      {
        id: 1,
        photoURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYKrmeDPyU2DgV_gDSnfXwJrcY9XFB-r8gl-hcjDjAw&s",
        fullName: "Atajan",
        status: "I am a boss...",
        followed: true,
        location: {
          cityName: "Ashgabad",
          country: "Turkmenistan",
        },
      },
      {
        id: 2,
        photoURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYKrmeDPyU2DgV_gDSnfXwJrcY9XFB-r8gl-hcjDjAw&s",
        fullName: "Isa",
        status: "I am a student of IUHD",
        followed: true,
        location: {
          cityName: "Nigeriya",
          country: "Africa",
        },
      },
      {
        id: 3,
        photoURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYKrmeDPyU2DgV_gDSnfXwJrcY9XFB-r8gl-hcjDjAw&s",
        fullName: "Tashli",
        status: "Yatan okuze sygyr yok!",
        followed: false,
        location: {
          cityName: "Dashoguz",
          country: "Turkmenistan",
        },
      },
      {
        id: 4,
        photoURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYKrmeDPyU2DgV_gDSnfXwJrcY9XFB-r8gl-hcjDjAw&s",
        fullName: "Kakamyrat",
        status: "No pain No Gain",
        followed: false,
        location: {
          cityName: "Dashoguz",
          country: "Turkmenistan",
        },
      },
    ]);
  }
  return (
    <div>
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
