import React, { Component } from "react";
import axios from "axios";
import UsersComponent from "./../../components/UsersComponent";

export default class Users extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    console.log(pages);
    if (pages.length>=10) {
      
    }

    return (
      <div>
        {/* <div>
          {pages.map((p) => {
            return (
              <span
                onClick={(e) => this.onPageChanged(p)}
                className={this.props.currentPage === p && "font-bold"}
              >
                {" "}
                {p}{" "}
              </span>
            );
          })}
        </div> */}

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
