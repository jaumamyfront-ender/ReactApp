import React from "react";
import Profile from "./Profile-Presentation";
import Status from "./Status"
import { connect } from "react-redux";
import { GetUserProfileTHC,GetUserStatusTHC,UpdateUserStatusTHC } from "../Redux/reducer-content";
import { compose } from "redux";
import { WithAuthRedirect } from "../../highOrderComponent/WithAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount = async () => {
    let userId = this.props.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.GetUserProfileTHC(userId);
    this.props.GetUserStatusTHC(userId);

  };

 


  render() {
    return (
      <Profile
        profile={this.props.UserImage}
      
        UserStatus={
          <Status
            status={this.props.status}
            updateStatus={this.props.UpdateUserStatusTHC}
            userId={this.props.userId}
          />
        }
      />
    );
  }
}
let mapStateToProps = (state) => ({
  UserImage: state.Profile.Profile,
  userId: state.Friends.userId,
  status:state.Profile.status,
  isAuth: state.Auth.isAuth,
});


export default compose(
connect(mapStateToProps, {  GetUserProfileTHC,
GetUserStatusTHC,
UpdateUserStatusTHC,}),
WithAuthRedirect
)(ProfileContainer);

