import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  getUsersFromServerThunkCreator,
  getUsersOnNewPageThunkCreator,
  DisabledFollow,
  DisabledUnfollow,
} from "../Redux/reducer-friends";
import UsersPresentationComponent from "./friends-presentation";
import Preloader from "../Preloader/Preloader";

class UsersAPI extends Component {
  componentDidMount() {
    const { users } = this.props;
    if (users.length === 0) {
      this.props.getUsersFromServerThunkCreator();
    }
    this.props.getUsersOnNewPageThunkCreator();
  }


  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          console.log(this.props.isFetching)
        )}
        <UsersPresentationComponent
          users={this.props.users} //user for UI
          pages={this.props.Pages} //Properties for UI
          count={this.props.Count} //
          current={this.props.Current} //
          ButtonDisabler={this.props.ButtonDisabler} //BUTTON DISABLER
          onPageChanged={this.props.getUsersOnNewPageThunkCreator} //get users(page changed)
          DisabledFollow={this.props.DisabledFollow} //subscribe to user(bll-dal-apiSer)
          DisabledUnfollow={this.props.DisabledUnfollow} //subscribe
          isAuth={this.props.isAuth}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.Friends.users,
  Pages: state.Friends.PagesSize,
  Count: state.Friends.TotalCount,
  Current: state.Friends.CurrentPage,
  isFetching: state.Friends.isFetching,
  ButtonDisabler: state.Friends.isButtonDisabled,
  isAuth:state.Auth.isAuth
});

export default connect(mapStateToProps, {
  getUsersFromServerThunkCreator,
  getUsersOnNewPageThunkCreator,
  DisabledFollow,
  DisabledUnfollow,
})(UsersAPI);
