import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { sortUsers } from "../utilities/utils";
import "../styles/component/HighestScorers.scss";

const HighestScorers = ({ users }) => {
  const renderUsers = sortUsers(users).map((user) => (
    <div className='player'>
      <div className='avatar'>
        <img src={user.image} alt={user.name} />
      </div>
      <div className='name'>{user.name}</div>
      <div className='score'>{user.score ? user.score : 0}</div>
    </div>
  ));

  return (
    <div className='highest-scorers'>
      <h3>All time Highest Scorers</h3>
      {renderUsers}
    </div>
  );
};

const mapPropsToState = (state) => {
  return { users: Object.values(state.users) };
};

export default connect(mapPropsToState, { fetchUsers })(HighestScorers);
