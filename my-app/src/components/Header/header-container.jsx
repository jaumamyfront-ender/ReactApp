import React from "react";
import { connect } from "react-redux";
import Header from "./header-presentation";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => ({
  isAuth: state.Auth.isAuth,
  Login: state.Auth.login,
});

export default connect(mapStateToProps)(HeaderContainer);
