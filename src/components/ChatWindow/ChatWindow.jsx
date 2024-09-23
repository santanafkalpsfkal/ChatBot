import React from 'react';
import MessageHandler from '../MessageHandler/MessageHandler';

const ChatWindow = ({ menuCollapsed }) => {
  return (
    <div className={`chat-window ${menuCollapsed ? 'chat-window-collapsed' : ''}`}>
      <MessageHandler />
    </div>
  );
};

export default ChatWindow;
