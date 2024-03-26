import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  setCurrentPage,
  getUsers,
  unfollowUser,
  followUser,
  toggleIsFollowingProgress,
} from "./../../data/users-reducer";
import Users from "./Users";
import Preloader from "./../../components/common/Preloader";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            followingInProgress={this.props.followingInProgress}
            toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(withAuthRedirect,
  connect(mapStateToProps, {setCurrentPage, getUsers,unfollowUser,followUser,toggleIsFollowingProgress,})
)(UsersContainer);
