import React, { useState } from 'react';
import './Chats.css';
import { Link } from 'react-router-dom';

const ChatPage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [showEmojis, setShowEmojis] = useState(false);
  const [currentChat, setCurrentChat] = useState(''); // État pour le chat actuel

  const discussions = [
    { name: 'Alice', messages: [] },
    { name: 'Bob', messages: [] },
    { name: 'Clara', messages: [] },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    const newMessage = {
      text: message,
      time: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  const handleEmojiClick = (emoji) => {
    setMessage(message + emoji);
    setShowEmojis(false);
  };

  const handleDiscussionClick = (discussion) => {
    setCurrentChat(discussion.name);
    setMessages(discussion.messages); // Charger les messages de la discussion sélectionnée
  };

  return (
    <div className="chat-container">
      <div className="header">
        <Link to='/ArticleJob'><button className="back-button">←</button></Link>
        <h2>{currentChat || 'Sélectionnez une discussion'}</h2>
        <div className="profile-pic">👤</div>
      </div>
      <div className="discussion-list">
        <h3>Discussions Récentes</h3>
        <div className="other-discussions">
          {discussions.map((discussion, index) => (
            <p key={index} onClick={() => handleDiscussionClick(discussion)} className="discussion-item">
              {discussion.name}
            </p>
          ))}
        </div>
      </div>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            <div className="message-header">
              <span className="profile-pic">👤</span>
              <span>{msg.time} - </span>
            </div>
            {msg.text}
          </div>
        ))}
      </div>
      {showEmojis && (
        <div className="emoji-picker">
          {['😀', '😂', '😍', '😎', '🙁', '😢', '😡','😁','😂','🤣','😗','🥰','😘','😉','😙','😚','☺','🤗','🤩','🤔','😮','😥','😣','😏','🙄','😑','😐','🤑','😨','🤯','🥵','🥶','🤬','😡','😠','🤕','🤮','👿','😈','😇','💀'].map((emoji) => (
            <span key={emoji} onClick={() => handleEmojiClick(emoji)} className="emoji">
              {emoji}
            </span>
          ))}
        </div>
      )}
      <div className="chat-input">
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tapez votre message..."
          />
          <button type="button" className="emoji-button" onClick={() => setShowEmojis(!showEmojis)}>
            😊
          </button>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;