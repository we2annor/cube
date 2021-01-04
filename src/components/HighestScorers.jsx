import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import "../styles/component/HighestScorers.scss";

const HighestScorers = (props) => {

console.log('users', props.users)
  const renderUsers = () => {};
  return (
    <div className='highest-scorers'>
      <h3>All time Highest Scorers</h3>
      {renderUsers()}
    </div>
  );
};

const mapPropsToState = (state) => {
  return { users: state.users };
};

export default connect(mapPropsToState, { fetchUsers })(HighestScorers);
