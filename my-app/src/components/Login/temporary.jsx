import React from "react";
import c from "./login.module.css";
import { reduxForm, Field } from "redux-form";

export default function Login() {
  const LoginForm = ({ handleSubmit }) => {
    const onSubmit = (formData) => {
      console.log(formData);
    };
    return (
      <div className={c.wrapper__form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Field placeholder={"Login"} component={"input"} name={"login"} />
          </div>
          <div>
            <Field
            type={"text"}
              placeholder={"Password"}
              component={"input"}
              name={"password"}
            />
          </div>
          <div className={c.last__Field}>
            <Field type={"checkbox"} component={"input"} name={"remeberMe"} />
            <span>remeber me motherfucker asshole</span>
          </div>
        </form>
      </div>
    );
  };
  const LoginReduxForm = reduxForm({
    form: "login",
  })(LoginForm);

  return (
    <div className="yoooo">
      <h1 className={c.style}> Login me</h1>
      <LoginReduxForm />
    </div>
  );
}
// not wotk old --v