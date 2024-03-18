import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import { setUserProfile } from "./../../data/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends Component {
  componentDidMount() {
    debugger;
    let id = this.props.router.params.id;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
};
export default connect(mapStateToProps, { setUserProfile })(
  withRouter(ProfileContainer)
);
