import React from "react";
import Profile from "./Profile-Presentation";
import { connect } from "react-redux";
// import { setUserToStateFromServer } from "../Redux/reducer-content";
import { GetUserProfileTHC } from "../Redux/reducer-content";
import Status from "./Status"

class ProfileContainer extends React.Component {
  componentDidMount = async () => {
    let userId = this.props.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.GetUserProfileTHC(userId);
  };

  render() {
    return <Profile profile={this.props.UserImage} status={<Status/>} />;
  }
}
let mapStateToProps = (state) => ({
  UserImage: state.Profile.Profile,
  userId: state.Friends.userId,
});

export default connect(mapStateToProps, {
  // setUserToStateFromServer,
  GetUserProfileTHC,
})(ProfileContainer);
// {...this.props}
