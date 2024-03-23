import React from "react";
import c from "./login.module.css";
import { reduxForm, Field } from "redux-form";
import { LoginTHC } from "../Redux/reducer-auth";
import { connect, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
const responseMessage = useSelector((state)=> state.Auth.whichResponse)
  return (
    <div className={c.wrapper__form}>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"Login"} component={"input"} name={"email"} />
        </div>
        <div>
          <Field
            placeholder={"Password"}
            component={"input"}
            name={"password"}
          />
        </div>
        <div>{responseMessage ? <p className={c.information}>{responseMessage} !!</p>: "you are authorized" }</div>
        <div className={c.last__Field}>
          <Field type={"checkbox"} component={"input"} name={"rememberMe"} placeholder={"rememberMe"}/>
         
        </div>
        <button className={c.button}>Submit </button>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.LoginTHC(formData.email, formData.password, formData.rememberMe);
   
  };
  if (props.isAuth === true) {
    return <Navigate to={"/profile"}/>
  }
  return (
    <div className="yoooo">
      <h1 className={c.style}>Login me</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.Auth.isAuth,
});

export default connect(mapStateToProps, { LoginTHC })(Login);

// connect<--login<--LoginReduxForm<--reduxform<--LoginForm
