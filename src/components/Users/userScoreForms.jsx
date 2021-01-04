import React from "react";
import { reduxForm, Field } from "redux-form";
import { FaTimes } from "react-icons/fa";
import history from "../../history";

const UserScoreForm = (props) => {
  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };

  const renderErrors = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className='error'>
          <div className='content'>{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, meta }) => {
    return (
      <div className='field'>
        <input {...input} autoComplete='off' placeholder={input.name} />
        {renderErrors(meta)}
      </div>
    );
  };

  return (
    <form onSubmit={props.handleSubmit(onSubmit)}>
      <div className='cancel' onClick={() => history.push("/")}>
        <FaTimes />
      </div>
      <Field name='Name' component={renderInput} />
      <Field name='Score' component={renderInput} />
      <button type='submit'>Submit</button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.Name) {
    errors.Name = "You must enter a user name";
  }
  if (!formValues.Score) {
    errors.Score = "You must enter user Score";
  }
  return errors;
};

export default reduxForm({
  form: "userForm",
  validate,
})(UserScoreForm);
