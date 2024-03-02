
import React from "react";
import c from "./login.module.css";
import { reduxForm, Field } from "redux-form";

const LoginForm = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    console.log(props)
 
  };

  return (
    <div className={c.wrapper__form}>
      <form onSubmit={props.handleSubmit(onSubmit)}>
        <div>
          <Field placeholder={"Login"} component={"input"} name={"login"} />
        </div>
        <div>
          <Field
            placeholder={"Password"}
            component={"input"}
            name={"password"}
          />
        </div>
        <div className={c.last__Field}>
          <Field type={"checkbox"} component={"input"} name={"remeberMe"} />
          <span>Remember me</span>
        </div>
        <button type="ssubmit">Submit</button>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default function Login() {
  return (
    <div className="yoooo">
      <h1 className={c.style}>Login me</h1>
      <LoginReduxForm />
    </div>
  );
}
// login<--LoginReduxForm<--reduxform<--LoginForm
// Right --v
