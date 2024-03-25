import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "./../../data/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getUserProfile } from "./../../api/api";

const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
};

class ProfileContainer extends Component {
  componentDidMount() {
    let id = this.props.router.params.id;
    if (!id) {
      id = 2;
    }
    getUserProfile(id).then((data) => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(ProfileContainer)
);
