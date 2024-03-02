import React from "react";
import { reduxForm, Field } from "redux-form";
import classes from "./dialogs.module.css";

const DialogsForm = (props) => {
  const onSubmit = (formData) => {
    props.save(formData.dialog)
    console.log(formData.dialog)

  };

  return (
    <div>
      <form action="" onSubmit={props.handleSubmit(onSubmit)}>
        <div>
          <Field
            component={"textarea"}
            name={"dialog"}
            placeholder={"yourmessage"}
          ></Field>
        </div>
        <button className={classes.sendMessageFromUser}>submit</button>
      </form>
    </div>
  );
};
const DialogReduxForm = reduxForm({
  form: "dialogs",
})(DialogsForm);
export default DialogReduxForm;
