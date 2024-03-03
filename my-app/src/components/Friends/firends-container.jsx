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
import { WithAuthRedirect } from "../../highOrderComponent/WithAuthRedirect";
import { compose } from "redux";

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
          pages={this.props.Pages} //-->for logic component
          count={this.props.Count} //-->for logic component
          current={this.props.Current} //-->color on page changed
          ButtonDisabler={this.props.ButtonDisabler} //BUTTON DISABLER
          onPageChanged={this.props.getUsersOnNewPageThunkCreator} //get users(page changed)-->select page logic
          DisabledFollow={this.props.DisabledFollow} //subscribe to user(bll-dal-apiSer)
          DisabledUnfollow={this.props.DisabledUnfollow} //subscribe
        
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



