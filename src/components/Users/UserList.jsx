import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";
import { fetchUsers } from "../../actions";
import HighestScorers from "../HighestScorers";
import { sortUsers, getPrefix, getUserStatus } from "../../utilities/utils";
import "../../styles/component/UserList.scss";

const UserList = ({ fetchUsers, users }) => {
  useEffect(() => {
    const loadUsers = () => {
      fetchUsers();
    };
    loadUsers();

    return () => {
      loadUsers();
    };
  }, [fetchUsers]);

  const renderAddScoreButton = () => (
    <div className='add-score'>
      <Link to='/users/new'>+ Add new score</Link>
    </div>
  );

  const renderUsers = () => {
    return sortUsers(users).map((user, index) => (
      <div className='container' key={index}>
        <div className='item rank'>
          {index + 1}
          {getPrefix(index + 1)}
        </div>
        <div className='item avatar'>
          <img src='' alt='' />
        </div>
        <div className='item score'>{user.score ? user.score : 0}</div>
        <div className='item name'>{user.name}</div>
        <div className='item'>{getUserStatus(user.status)}</div>
        <Link className='item button edit' to={`/users/edit/${user.name}`}>
          <BsPencil />
        </Link>
      </div>
    ));
  };

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <HighestScorers users={users} />
      <div className='leaders-table'>
        <div className='header'>
          <h3>Leaders table for this period</h3>
          {renderAddScoreButton()}
        </div>
        <div className='list'>{renderUsers()}</div>
      </div>
    </React.Fragment>
  );
};

const mapPropsToState = (state) => {
  return { users: Object.values(state.users) };
};
export default connect(mapPropsToState, { fetchUsers })(UserList);
