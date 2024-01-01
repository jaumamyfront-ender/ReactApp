import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { unfollowAC, followAC, setUsersAC } from "../Redux/reducer-friends"; // Замените на ваши action creators
import classes from "./friends.module.css"; // Замените на путь к вашему CSS-модулю
import UserUndefined from "../../assets/userUndefined.png"; // Замените на путь к вашему изображению

class FriendsElements extends Component {
  componentDidMount() {
    const { users, setUsers } = this.props;

    if (users.length === 0) {
      console.log("No local users, fetching from server...");
      this.getUsersFromServer();
    }
  }

  getUsersFromServer = async () => {
    try {
      const response = await axios.get(
        "https://social-network.samuraijs.com/api/1.0/users"
      );
      this.props.setUsers(response.data.items);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  render() {
    const { users, unfollow, follow } = this.props;

    return users.map((u) => (
      <div key={u.id} className={classes.BlockDialogsWrapper}>
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
            <p>{u.fullName}</p>
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
});

const mapDispatchToProps = (dispatch) => ({
  unfollow: (userID) => dispatch(unfollowAC(userID)),
  follow: (userID) => dispatch(followAC(userID)),
  setUsers: (users) => dispatch(setUsersAC(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsElements);
