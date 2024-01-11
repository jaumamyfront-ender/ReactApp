import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUserToStateFromServer } from "../Redux/reducer-content";
import Header from "./header-presentation";
import { setUserAuthAC } from "../Redux/reducer-auth";

class HeaderContainer extends React.Component {
  componentDidMount = async () => {
    await axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        let { id, login, email } = response.data.data;
        if (response.data.resultCode === 0) {
          this.props.setUserAuthAC(id, login, email);
        }
      });
  };

  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => ({
  isAuth: state.Auth.isAuth,
  Login: state.Auth.login,
});

export default connect(mapStateToProps, { setUserAuthAC })(HeaderContainer);
