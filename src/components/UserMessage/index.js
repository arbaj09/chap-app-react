import React, { useState, useEffect } from 'react';
import { AiFillLike } from 'react-icons/ai';
import './index.css';

const UserMessage = ({ userEnterMessage }) => {
  const [count, setCount] = useState(0);
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    setNewList(userEnterMessage);
  }, [userEnterMessage]);

  const onClickLike = () => {
    setCount(prevCount => prevCount + 1);
  };

  const { userMessage, hour, minutes, user, initial } = newList;
  const likeCount = count > 0 ? count : '';
  let initialColor = '';

  switch (initial) {
    case 'A':
      initialColor = 'pink';
      break;
    case 'B':
      initialColor = 'yellow';
      break;
    case 'C':
      initialColor = 'red';
      break;
    case 'D':
      initialColor = 'blue';
      break;
    case 'E':
      initialColor = 'green';
      break;
    default:
      break;
  }

  return (
    <li className="user-msg-container">
      <div className="content">
        <p className={`${initialColor} initial-user`}>{initial}</p>
        <h3 className="user-name">{user}</h3>
        <p className="time">
          {hour}:{minutes}
        </p>
      </div>
      <div className="msg-like-container">
        <div className="msg-content">
          <p className="message">{userMessage}</p>
        </div>
        <button className="like-btn" type="button" onClick={onClickLike}>
          <AiFillLike className="like-icon" />
        </button>
        <p className="like-count">{likeCount}</p>
      </div>
    </li>
  );
};

export default UserMessage;
