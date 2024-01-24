import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  unfollow,
  follow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  setFetching,
  isFetchingButton,
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
          users={this.props.users}
          pages={this.props.Pages}
          count={this.props.Count}
          current={this.props.Current}
          ButtonDisabler={this.props.ButtonDisabler}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          isFetchingButton={this.props.isFetchingButton}
          onPageChanged={this.props.getUsersOnNewPageThunkCreator}
          DisabledFollow={this.props.DisabledFollow}
          DisabledUnfollow={this.props.DisabledUnfollow}
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
});

export default connect(mapStateToProps, {
  unfollow,
  follow,
  isFetchingButton,
  getUsersFromServerThunkCreator,
  getUsersOnNewPageThunkCreator,
  DisabledFollow,
  DisabledUnfollow,
})(UsersAPI);
