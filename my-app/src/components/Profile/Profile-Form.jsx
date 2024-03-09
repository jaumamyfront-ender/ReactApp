import React from "react";
import style from "./profile-form.module.css";
import { reduxForm, Field } from "redux-form";
import { required, maxLenghtCreator } from "../utilities/validator";


const ProfileForm = (props) => {
  const onSubmit = (object) => {
    props.save(object.mypost);
    console.log(object)
  };


 let a = true
 let gm =(c)=>{
  console.log(c)
 }
 
  return (
    <div className={a ? style.formControl : ""}>
      <form onSubmit={props.handleSubmit(onSubmit)}>
        <div>
          <Field
            placeholder={"my-post add"}
            component="textarea"
            name={"mypost"}
            validate={[required, maxLenghtCreator(10)]}
            ref={gm}
           
          />
        </div>
        <div>
          <button type="submit" className={style.my__postssendbutton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const ProfileReduxForm = reduxForm({
  form: "myPost",
})(ProfileForm);

export default ProfileReduxForm;
