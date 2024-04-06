import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUsersFromServerThunkCreator,
  getUsersOnNewPageThunkCreator,
  DisabledFollow,
  DisabledUnfollow,
} from "../Redux/reducer-friends";
import UsersPresentationComponent from "./friends-presentation";
import Preloader from "../Preloader/Preloader";
import { WithAuthRedirect } from "../../HighOrderComponent/WithAuthRedirect"
import { compose } from "redux";
import { superSelectorUsers } from "../utilities/selectors/reselector";

class UsersAPI extends Component {
  componentDidMount() {
    const { users } = this.props;
    if (users.length === 0) {
      this.props.getUsersFromServerThunkCreator();
    }
    this.props.getUsersOnNewPageThunkCreator();
  }

  render() {
    console.log("render")
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          console.log(this.props.isFetching)
        )}
        <UsersPresentationComponent
          users={this.props.users} //user for UI
          ButtonDisabler={this.props.ButtonDisabler} //BUTTON DISABLER
          DisabledFollow={this.props.DisabledFollow} //subscribe to user(bll-dal-apiSer)
          DisabledUnfollow={this.props.DisabledUnfollow} //subscribe
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  // users: state.Friends.users,
  users: superSelectorUsers(state),
  isFetching: state.Friends.isFetching,
  ButtonDisabler: state.Friends.isButtonDisabled,
  isAuth: state.Auth.isAuth,
});

const mapDispatchToProps = {
  getUsersFromServerThunkCreator,
  getUsersOnNewPageThunkCreator,
  DisabledFollow,
  DisabledUnfollow,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(UsersAPI);
