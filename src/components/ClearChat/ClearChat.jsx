// src/components/ClearChatButton.js
import React from 'react';

function ClearChatButton({ clearChat }) {
  return (
    <button onClick={clearChat} className="clear-chat-button">
      <i className="fas fa-trash"></i>
    </button>
  );
}

export default ClearChatButton;
