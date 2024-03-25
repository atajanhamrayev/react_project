import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { auth } from "../../api/api";
import { setAuthUserData } from "./../../data/auth-reducer";

export class HeaderContainer extends Component {
  componentDidMount() {
    auth().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
