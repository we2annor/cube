import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";

export const sortUsers = (users) =>
  users.sort((a, b) => {
    if (!a.score) {
      a.score = 0;
    }

    if (!b.score) {
      b.score = 0;
    }

    if (a.score > b.score) {
      return -1;
    } else if (a.score === b.score) {
      return 0;
    } else {
      return 1;
    }
  });

export const getPrefix = (rank) => {
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

export const getUserStatus = (status) => {
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
