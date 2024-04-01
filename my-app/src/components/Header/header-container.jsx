import React from "react";
import { connect } from "react-redux";
import Header from "./header-presentation";
import { AuthTHC } from "../Redux/reducer-auth";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => ({
  isAuth: state.Auth.isAuth,
  Login: state.Auth.login,
});

export default connect(mapStateToProps, { AuthTHC })(HeaderContainer);
