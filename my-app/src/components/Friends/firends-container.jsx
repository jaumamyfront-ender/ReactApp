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
} from "../Redux/reducer-friends";
import UsersPresentationComponent from "./friends-presentation";
import Preloader from "../Preloader/Preloader";

import { GetUsersForPageChanged, GetUsers } from "../../api/api";

class UsersAPI extends Component {
  componentDidMount() {
    const { users } = this.props;
    if (users.length === 0) {
      this.getUsersFromServer();
    }
  }
  getUsersFromServer = async () => {
    this.props.setFetching(true);
    try {
      const data = await GetUsers(this.props.Current, this.props.Pages);
      this.props.setUsers(data.items);
      this.props.setUsersTotalCount(data.totalCount);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      this.props.setFetching(false);
    }
  };
  onPageChanged = (PageNumber) => {
    let PNR = PageNumber;
    this.props.setCurrentPage(PNR);
    this.getUsersOnNewPage(PNR);
  };

  getUsersOnNewPage = async (PNR) => {
    this.props.setFetching(true);
    try {
      const data1 = await GetUsersForPageChanged(PNR, this.props.Pages);
      this.props.setUsers(data1.items);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      this.props.setFetching(false);
    }
  };

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
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          pages={this.props.Pages}
          count={this.props.Count}
          current={this.props.Current}
          onPageChanged={this.onPageChanged}
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
});

export default connect(mapStateToProps, {
  unfollow,
  follow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  setFetching,
})(UsersAPI);

// export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);
