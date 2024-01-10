import React from "react";
import Profile from "./Profile-Presentation";
import axios from "axios";
import { connect } from "react-redux";
import { setUserToStateFromServer } from "../Redux/reducer-content";

class ProfileContainer extends React.Component {
  componentDidMount = async () => {
    console.log(this.props);
    let userId = this.props.userId;
    console.log(userId);
    if (!userId) {
      userId = 2;
    }

    await axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUserToStateFromServer(response.data);
      });
  };

  render() {
    return <Profile {...this.props} profile={this.props.userProfile} />;
  }
}
let mapStateToProps = (state) => ({
  userProfile: state.Profile.Profile,
  userId: state.Friends.userId,
});

export default connect(mapStateToProps, { setUserToStateFromServer })(
  ProfileContainer
);
