// src/components/MessageList.js
import React, { useRef, useEffect } from 'react';
import { CopyOutlined } from '@ant-design/icons'; // Importa el icono de copiar de Ant Design
import AutoTypingMessage from './AutoTypingMessage';
import robotIcon from '../../assets/robotIcon.png'; // Asegúrate de que la ruta es correcta

const MessageList = ({ messages, copyToClipboard }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="messages">
      {messages.map((message) => (
        message.isTyping ? (
          <AutoTypingMessage
            key={message.id}
            text={message.text}
            isInfoMessage={message.isInfoMessage}
            isCedulaMessage={message.isCedulaMessage}
            onTypingComplete={message.onTypingComplete}
          />
        ) : (
          <div
            key={message.id}
            className={`message ${message.isInfoMessage ? 'info' : ''} ${message.isCedulaMessage ? 'cedula' : ''} ${message.isSentMessage ? 'sent' : ''} ${message.isTotalMessage ? 'total' : ''}`}
          >
            {/* Mostrar el icono solo para los mensajes del asistente */}
            {message.isInfoMessage && (
              <img
                src={robotIcon}
                alt="Robot Icon"
                className="robot-icon"
              />
            )}
            <span>{message.text}</span>
            {message.isCedulaMessage && (
              <CopyOutlined 
                className="copy-icon" 
                onClick={() => copyToClipboard(message.text)}
                style={{ fontSize: '16px', cursor: 'pointer' }} // Ajustar el tamaño y el estilo
                title="Copiar al portapapeles"
              />
            )}
          </div>
        )
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
