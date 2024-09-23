// src/components/AutoTypingMessage.js
import React, { useState, useEffect } from 'react';

const AutoTypingMessage = ({ text, onTypingComplete, isInfoMessage, isCedulaMessage }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prevText) => {
        if (currentIndex < text.length) {
          return text.slice(0, ++currentIndex); // Incrementa correctamente
        } else {
          clearInterval(intervalId);
          onTypingComplete();
          return text;
        }
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, [text, onTypingComplete]);

  return (
    <div className={`message ${isInfoMessage ? 'info' : ''} ${isCedulaMessage ? 'cedula' : ''}`}>
      {displayText}
    </div>
  );
};

export default AutoTypingMessage;
