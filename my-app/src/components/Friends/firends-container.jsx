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
class UsersAPI extends Component {
  componentDidMount() {
    const { users } = this.props;

    if (users.length === 0) {
      this.getUsersFromServer();
    }
  }

  getUsersFromServer = async () => {
    try {
      this.props.setFetching(true);
      const response = await axios.get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.Current}&count=${this.props.Pages}`,
        { withCredentials: true }
      );
      this.props.setUsers(response.data.items);
      this.props.setUsersTotalCount(response.data.totalCount);
      this.props.setFetching(false);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  onPageChanged = (PageNumber) => {
    this.props.setCurrentPage(PageNumber);
    this.getUsersForonPageChanged(PageNumber);
  };
  getUsersForonPageChanged = (PageNumber) => {
    this.props.setFetching(true);
    let response = axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${PageNumber}&count=${this.props.Pages}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setFetching(false);
      });
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
