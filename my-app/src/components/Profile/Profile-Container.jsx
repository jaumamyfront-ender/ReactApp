import React from "react";
import Profile from "./Profile-Presentation";
import { connect } from "react-redux";
import { setUserToStateFromServer } from "../Redux/reducer-content";
import { GetUserProfileTHC } from "../Redux/reducer-content";

class ProfileContainer extends React.Component {
  componentDidMount = async () => {
    let userId = this.props.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.GetUserProfileTHC(userId);
  };

  render() {
    return <Profile {...this.props} profile={this.props.userProfile} />;
  }
}
let mapStateToProps = (state) => ({
  userProfile: state.Profile.Profile,
  userId: state.Friends.userId,
});

export default connect(mapStateToProps, {
  setUserToStateFromServer,
  GetUserProfileTHC,
})(ProfileContainer);
