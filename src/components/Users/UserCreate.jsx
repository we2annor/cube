import React from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions";
import UserScoreForms from "./userScoreForms";
import "../../styles/component/userForm.scss";

const UserCreate = (props) => {
  const onSubmit = (formValues) => {
    props.createUser(formValues);
  };

  return (
    <div className='user-form-wrapper'>
      <h3>Create User</h3>
      <UserScoreForms onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { createUser })(UserCreate);
