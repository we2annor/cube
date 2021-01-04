import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BsPencil } from "react-icons/bs";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fetchUsers } from "../../actions";
import HighestScorers from "../HighestScorers";
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

  const getPrefix = (rank) => {
    let prefix = "";
    switch (true) {
      case rank === 1:
        prefix = "st";
        break;
      case rank === 2:
        prefix = "nd";
        break;
      case rank === 3:
        prefix = "rd";
        break;
      case rank >= 3:
        prefix = "th";
        break;
      default:
        return;
    }
    return prefix;
  };

  const getUserStatus = (status) => {
    if (!status) {
      status = "No change";
    }
    let content;
    if (status === "No change") {
      content = (
        <div className='user-status right-arrow'>
          <FaCaretRight className='arrow' />
          {status}
        </div>
      );
    } else if (status === "Moved up") {
      content = (
        <div className='user-status up-arrow'>
          <FaCaretUp className='arrow' />
          {status}
        </div>
      );
    } else {
      content = (
        <div className='user-status down-arrow'>
          <FaCaretDown className='arrow' />
          {status}
        </div>
      );
    }

    return content;
  };

  const renderUsers = () => {
    return users.map((user, index) => (
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
