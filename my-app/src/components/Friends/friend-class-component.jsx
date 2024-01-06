import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  unfollowAC,
  followAC,
  setUsersAC,
  setCurrentPageAC,
  setUsersTotalCountAC,
} from "../Redux/reducer-friends"; // Замените на ваши action creators
import classes from "./friends.module.css"; // Замените на путь к вашему CSS-модулю
import UserUndefined from "../../assets/userUndefined.png"; // Замените на путь к вашему изображению

class FriendsElements extends Component {
  componentDidMount() {
    const {
      users,
      setUsers,
      setCurrentPage,
      setUsersTotalCount,
      Current,
      Pages,
    } = this.props;

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

      console.log(response.data);
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
      });
  };

  render() {
    const { users, unfollow, follow, Pages, Count, Current } = this.props;
    let PagesCount = Math.ceil(Count / Pages);
    let pages = [];
    let i = 1;
    for (i = 1; i <= PagesCount; i++) {
      pages.push(i);
    }

    return users.map((u) => (
      <div key={u.id} className={classes.BlockDialogsWrapper}>
        <div className={classes.PagesSize}>
          {pages.map((p) => {
            return (
              <span
                onClick={(e) => {
                  this.onPageChanged(p);
                }}
                className={Current === p ? classes.selectedPage : ""}
              >
                {p}
              </span>
            );
          })}
        </div>
        <div className={classes.followUsers}>
          <div className={classes.followUserImage}>
            <img
              src={u.photoUrl != null ? u.photos.small : UserUndefined}
              alt="/#"
            />
          </div>
          <div className={classes.followUserButton}>
            {u.followed ? (
              <button
                onClick={() => {
                  follow(u.id);
                }}
              >
                Follow
              </button>
            ) : (
              <button
                onClick={() => {
                  unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            )}
          </div>
        </div>
        <div className={classes.UserComments}>
          <div className={classes.comment__area}>
            <p>{u.name}</p>
            <p>{u.comment}</p>
          </div>
          <div className={classes.info__container}>
            <div className={classes.info__card}>
              <p>{"u.location.country"}</p>
              <p>{"u.location.city"}</p>
            </div>
          </div>
        </div>
      </div>
    ));
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

export default connect(mapStateToProps, mapDispatchToProps)(FriendsElements);
