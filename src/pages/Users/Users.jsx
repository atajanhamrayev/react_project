import React, { Component } from "react";
import axios from "axios";
import UsersComponent from "./../../components/UsersComponent";

export default class UsersC extends Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map((user) => {
          return (
            <UsersComponent
              user={user}
              key={user.id}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
            />
          );
        })}
      </div>
    );
  }
}
