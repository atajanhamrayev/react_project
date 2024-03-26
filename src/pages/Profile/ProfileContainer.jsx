import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Profile from "./Profile";
import { getUserProfile } from "./../../data/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";

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
    this.props.getUserProfile(id);
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
