import React from "react";
import c from "././../Login/login.module.css"
import { reduxForm, Field } from "redux-form";

const ProfileForm = (props) => {
  const onSubmit = (formData) => {
    props.save(formData.mypost)
   
  };

  return (
    <div className={c.my__poststextarea}>
      <form onSubmit={props.handleSubmit(onSubmit)}>
        <div>
          <Field
            placeholder={"my-post add"}
            component={"input"}
            name={"mypost"}
          />
        </div>
        <div>
          
          <button type="submit" className={c.my__postssendbutton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const ProfileReduxForm = reduxForm({
  form: "login",
})(ProfileForm);

export default ProfileReduxForm
