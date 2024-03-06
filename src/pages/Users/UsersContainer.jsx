import Users from "./Users";
import { connect } from "react-redux";
import { followAC, unfollowAC, setusersAC } from "./../../data/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setusersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
