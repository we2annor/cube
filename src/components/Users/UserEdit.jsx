import React, { useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { editUser, fetchUser } from "../../actions";
import UserScoreForms from "./userScoreForms";
import "../../styles/component/userForm.scss";

const UserEdit = (props) => {
  useEffect(() => {
    const fetchCurrentUser = () => {
      props.fetchUser(props.match.params.name);
    };
    fetchCurrentUser();
  });

  const onSubmit = (formValues) => {
    props.editUser(props.match.params.name, formValues);
  };

  console.log("user", props.user);
  return (
    <div className='user-form-wrapper'>
      <h3>Edit User</h3>
      <UserScoreForms
        initialValues={_.pick(props.user, "Name", "Score")}
        onSubmit={onSubmit}
      />
    </div>
  );
};

const mapPropsToState = (state, ownProps) => {
  return { user: state.users[ownProps.match.params.name] };
};

export default connect(mapPropsToState, { editUser, fetchUser })(UserEdit);
