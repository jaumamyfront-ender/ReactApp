import React from "react";
import c from "./login.module.css";
import { reduxForm, Field } from "redux-form";
import { LoginTHC } from "../Redux/reducer-auth";
import { connect } from "react-redux";

const LoginForm = (props) => {
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
        <div className={c.last__Field}>
          <Field type={"checkbox"} component={"input"} name={"rememberMe"} />
          <span>Remember me</span>
        </div>
        <button>Submit </button>
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
    console.log(formData);
  };
  return (
    <div className="yoooo">
      <h1 className={c.style}>Login me</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { LoginTHC })(Login);

// connect<--login<--LoginReduxForm<--reduxform<--LoginForm
