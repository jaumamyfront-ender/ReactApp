import React from "react";
import { reduxForm, Field } from "redux-form";
import classes from "./dialogs.module.css";
import { required, maxLenghtCreator } from "../utilities/validator";


const DialogsForm = (props) => {
  const onSubmit = (formData) => {
    props.save(formData.dialog)
    props.clearFields(false,false,"dialog")

  };

  return (
    <div>
      <form action="" onSubmit={props.handleSubmit(onSubmit)}>
        <div>
          <Field
            component={"textarea"}
            name={"dialog"}
            placeholder={"yourmessage"}
            validate={[required, maxLenghtCreator(10)]}
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
