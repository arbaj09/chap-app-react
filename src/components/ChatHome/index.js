import React, { useState } from 'react';
import { BsPeople, BsEmojiSmile } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import Picker from 'emoji-picker-react';
import Popup from 'reactjs-popup';
import UserMessage from '../UserMessage';
import './index.css';

const userList = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin'];

const ChatHome = () => {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState('');

  const onChangeValue = event => {
    setMessage(event.target.value);
  };

  const onEmojiClick = (event, emojiObject) => {
    const emojiMessage = message + emojiObject.emoji;
    console.log(emojiObject);

    console.log(message)
    setMessage(emojiMessage);
  }

  const onSendMsg = event => {
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const index = Math.floor(Math.random() * userList.length);
    const user = userList[index];
    const initial = user[0];

    if (event.key === 'Enter' && message.trim() !== '') {
      const newMessage = {
        id: uuidv4(),
        userMessage: message,
        hour,
        minutes,
        user,
        initial,
      };

      setList(prevList => [...prevList, newMessage]);
      setMessage('');
    }
  };

  return (
    <div className="chat-section">
      <div className="header-section">
        <div className="header-content">
          <h1 className="head-intro">Introductions</h1>
          <p className="desc">This Channel is For Company Wide Chatter</p>
        </div>
        <div className="count-section">
          <p className="count">3 | 100</p>
          <BsPeople className="people-icon" />
        </div>
      </div>
      <hr className="hr-line" />
      <ul className="user-enter-msg-container ">
        {list.map(each => (
          <UserMessage key={each.id} userEnterMessage={each} />
        ))}
      </ul>
      <div className="msg-container">
        <input
          type="text"
          placeholder="Text Message"
          className="msg-input"
          value={message}
          onChange={onChangeValue}
          onKeyDown={onSendMsg}
          aria-label="Text Message"
        />
        <Popup
          trigger={
            <button type="button" className="emoji-button" aria-label="Emoji Picker">
              <BsEmojiSmile className="emoji" />
            </button>
          }
          position="top right"
        >
          <Picker onEmojiClick={onEmojiClick} />
        </Popup>

      </div>
 
    </div>
  );
};

export default ChatHome;
