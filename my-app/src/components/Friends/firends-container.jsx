import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  unfollowAC,
  followAC,
  setUsersAC,
  setCurrentPageAC,
  setUsersTotalCountAC,
} from "../Redux/reducer-friends";
import UsersPresentationComponent from "./friend-class-component";
class UsersAPI extends Component {
  componentDidMount() {
    const { users, setUsers, unfollow, follow, Pages, Count, Current } =
      this.props;

    if (users.length === 0) {
      this.getUsersFromServer();
    }
  }

  getUsersFromServer = async () => {
    try {
      const response = await axios.get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.Current}&count=${this.props.Pages}`
      );
      this.props.setUsers(response.data.items);
      this.props.setUsersTotalCount(response.data.totalCount);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  onPageChanged = (PageNumber) => {
    this.props.setCurrentPage(PageNumber);
    this.getUsersForonPageChanged(PageNumber);
  };
  getUsersForonPageChanged = (PageNumber) => {
    let response = axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${PageNumber}&count=${this.props.Pages}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        console.log(response.data);
      });
  };

  render() {
    console.log(this.props);
    return (
      <UsersPresentationComponent
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        pages={this.props.Pages}
        count={this.props.Count}
        current={this.props.Current}
        onPageChanged={this.onPageChanged}
      />
    );
  }
}
const mapStateToProps = (state) => ({
  users: state.Friends.users,
  Pages: state.Friends.PagesSize,
  Count: state.Friends.TotalCount,
  Current: state.Friends.CurrentPage,
});

const mapDispatchToProps = (dispatch) => ({
  unfollow: (userID) => dispatch(unfollowAC(userID)),
  follow: (userID) => dispatch(followAC(userID)),
  setUsers: (users) => dispatch(setUsersAC(users)),
  setCurrentPage: (Current) => dispatch(setCurrentPageAC(Current)),
  setUsersTotalCount: (totalCount) =>
    dispatch(setUsersTotalCountAC(totalCount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);
