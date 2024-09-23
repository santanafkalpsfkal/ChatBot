import React from 'react';
import { SendOutlined, DeleteOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';

const { TextArea } = Input;

const InputForm = ({ input, setInput, handleSend, clearChat }) => {
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(e);
    }
  };

  return (
    <div className="input_form">
      <form className="input-form" onSubmit={handleSend}>
        <TextArea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Envía un mensaje al asistente virtual"
          style={{
            flex: 1,
            marginRight: '10px',
            height: '40px', // Ajusta la altura al tamaño original del input
            maxHeight: '100px', // Limita la altura máxima
            overflowY: 'auto', // Agrega scroll vertical si es necesario
            resize: 'none', // Evita el redimensionamiento manual
          }}
          onPressEnter={handleKeyPress}
        />
        <Button type="primary" htmlType="submit" icon={<SendOutlined />}>
        </Button>
        <Button
          type="danger"
          onClick={clearChat}
          icon={<DeleteOutlined />}
          style={{ marginLeft: '10px' }}
        >
        </Button>
      </form>
    </div>
  );
};

export default InputForm;
