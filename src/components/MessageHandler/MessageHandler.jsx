import React, { useState } from 'react';
import MessageList from '../MessageList/MessageList';
import InputForm from '../InputForm/InputForm';
import { notification } from 'antd';
import backgroundImg from '../../assets/1.png';
import customIcon from '../../assets/robotIcon.png'; // Asegúrate de que la ruta sea correcta
import './notificationStyles.css'; // Importa el archivo de estilos

const MessageHandler = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [cedulas, setCedulas] = useState('');
  const [totalCedulas, setTotalCedulas] = useState(0);
  const [hasProcessedCedulas, setHasProcessedCedulas] = useState(false);

  const getGreetingResponse = () =>
    '¡Hola!, Soy tu asistente virtual diseñado para ayudarte en la gestión de matriculas en la plataforma SSFF';
  const getThanksResponse = () => '¡De nada! Si necesitas algo más, solo dímelo.';
  const getFarewellResponse = () => '¡Adiós! Que tengas un buen día.';
  const getHowAreYouResponse = () => '¡Estoy bien, como aun soy un asistente virtual no tengo emociones, pero gracias! ¿Y tú cómo estás?';
  const getImGladYoureWellResponse = () => '¡Me alegra saber que estás bien!';
  const getHelpResponse = () => 'Claro, por favor proporciona las cédulas que deseas procesar y las concatenaré para ti.';
  const getDefaultResponse = () =>
    'Lo siento, no entendí tu mensaje. ¿Puedes intentar de nuevo?';

  const isPhoneNumber = (num) => {
    const phonePrefixes = ['310', '311', '312', '313', '314', '321', '320', '322', '323', '324', '315', '316', '317', '318', '305', '319', '350', '351', '300', '301', '302'];
    return phonePrefixes.some(prefix => num.startsWith(prefix)) && num.length === 10;
  };

  const extractCedulas = (text) => {
    const idNumberPattern = /\b\d{7,10}\b/g;
    const allNumbers = text.match(idNumberPattern) || [];
    const phoneNumbers = new Set(allNumbers.filter(isPhoneNumber));
    return allNumbers.filter(num => !phoneNumbers.has(num));
  };

  const handleSend = async (e) => {
    e.preventDefault();

    if (!input.trim()) {
      notification.warning({
        message: 'Campo de entrada vacío',
        description: 'Por favor, ingrese un mensaje antes de enviar al Asistente virtual.',
        placement: 'topRight',
        duration: 3,
        icon: <img src={customIcon} alt="Custom Icon" style={{ width: '30px', height: '30px' }} />,
        className: 'custom-notification',
        style: {
          backgroundColor: '#1d1c1c',
        },
      });
      return;
    }

    const newMessage = {
      id: messages.length,
      text: input.trim(),
      isSentMessage: true,
      isTyping: false,
    };

    const updatedMessages = [...messages, newMessage];

    if (/hola|buenos días|buenas tardes|buenas noches/i.test(newMessage.text)) {
      setMessages([
        ...updatedMessages,
        {
          id: updatedMessages.length,
          text: getGreetingResponse(),
          isInfoMessage: true,
          isTyping: true,
          onTypingComplete: () => {
            setTimeout(() => { // Ajusta el tiempo aquí
              setMessages((prevMessages) =>
                prevMessages.map((msg, index) =>
                  index === updatedMessages.length
                    ? { ...msg, isTyping: false }
                    : msg
                )
              );
            }, 100); // Tiempo en milisegundos (ajusta según necesites)
          },
        },
      ]);
      setInput('');
      return;
    }

    if (/cómo estás|como estas|como esta|cómo te va|qué tal/i.test(newMessage.text)) {
      setMessages([
        ...updatedMessages,
        {
          id: updatedMessages.length,
          text: getHowAreYouResponse(),
          isInfoMessage: true,
          isTyping: true,
          onTypingComplete: () => {
            setTimeout(() => { // Ajusta el tiempo aquí
              setMessages((prevMessages) =>
                prevMessages.map((msg, index) =>
                  index === updatedMessages.length
                    ? { ...msg, isTyping: false }
                    : msg
                )
              );
            }, 100); // Tiempo en milisegundos (ajustado a 50)
          },
        },
      ]);
      setInput('');
      return;
    }


    if (/estoy bien|bien|me encuentro bien|todo bien|estoy genial|genial/i.test(newMessage.text)) {
      setMessages([
        ...updatedMessages,
        {
          id: updatedMessages.length,
          text: getImGladYoureWellResponse(),
          isInfoMessage: true,
          isTyping: true,
          onTypingComplete: () => {
            setTimeout(() => { // Ajusta el tiempo aquí
              setMessages((prevMessages) =>
                prevMessages.map((msg, index) =>
                  index === updatedMessages.length
                    ? { ...msg, isTyping: false }
                    : msg
                )
              );
            }, 50); // Tiempo en milisegundos (ajustado a 50)
          },
        },
      ]);
      setInput('');
      return;
    }


    if (/gracias|te agradezco/i.test(newMessage.text)) {
      setMessages([
        ...updatedMessages,
        {
          id: updatedMessages.length,
          text: getThanksResponse(),
          isInfoMessage: true,
          isTyping: true,
          onTypingComplete: () => {
            setTimeout(() => { // Ajusta el tiempo aquí
              setMessages((prevMessages) =>
                prevMessages.map((msg, index) =>
                  index === updatedMessages.length
                    ? { ...msg, isTyping: false }
                    : msg
                )
              );
            }, 50); // Tiempo en milisegundos (ajustado a 50)
          },
        },
      ]);
      setInput('');
      return;
    }


    if (/adiós|adios|hasta luego|nos vemos|chao/i.test(newMessage.text)) {
      setMessages([
        ...updatedMessages,
        {
          id: updatedMessages.length,
          text: getFarewellResponse(),
          isInfoMessage: true,
          isTyping: true,
          onTypingComplete: () => {
            setTimeout(() => { // Ajusta el tiempo aquí
              setMessages((prevMessages) =>
                prevMessages.map((msg, index) =>
                  index === updatedMessages.length
                    ? { ...msg, isTyping: false }
                    : msg
                )
              );
            }, 50); // Tiempo en milisegundos (ajustado a 50)
          },
        },
      ]);
      setInput('');
      return;
    }

    if (/ayúdame|ayuda|ayudame|cedulas|concatenar|ordenar|ayúdame con estas cédulas/i.test(newMessage.text)) {
      setMessages([
        ...updatedMessages,
        {
          id: updatedMessages.length,
          text: getHelpResponse(),
          isInfoMessage: true,
          isTyping: true,
          onTypingComplete: () => {
            setTimeout(() => { // Ajusta el tiempo aquí
              setMessages((prevMessages) =>
                prevMessages.map((msg, index) =>
                  index === updatedMessages.length
                    ? { ...msg, isTyping: false }
                    : msg
                )
              );
            }, 50); // Tiempo en milisegundos (ajustado a 50)
          },
        },
      ]);
      setInput('');
      return;
    }


    const cedulasList = extractCedulas(newMessage.text);
    if (cedulasList.length > 0) {
      const formattedCedulas = cedulasList.join(',');
      const total = cedulasList.length;

      // Eliminé la llamada al servidor
      setCedulas(formattedCedulas);
      setTotalCedulas(total);
      setMessages([
        ...updatedMessages,
        {
          id: updatedMessages.length,
          text: 'Hola! Las cédulas procesadas son:',
          isInfoMessage: true,
          isTyping: true,
          onTypingComplete: () => {
            setMessages((prevMessages) => [
              ...prevMessages.slice(0, updatedMessages.length),
              {
                id: updatedMessages.length,
                text: 'Hola! Las cédulas procesadas son:',
                isInfoMessage: true,
              },
              {
                id: updatedMessages.length + 1,
                text: formattedCedulas,
                isCedulaMessage: true,
              },
              {
                id: updatedMessages.length + 2,
                text: `Total de cédulas: ${total}`,
                isTotalMessage: true,
              },
            ]);
          },
        },
      ]);
      setHasProcessedCedulas(true);
    } else {
      setMessages([
        ...updatedMessages,
        {
          id: updatedMessages.length,
          text: getDefaultResponse(),
          isInfoMessage: true,
          isTyping: true,
          onTypingComplete: () => {
            setMessages((prevMessages) =>
              prevMessages.map((msg, index) =>
                index === updatedMessages.length
                  ? { ...msg, isTyping: false }
                  : msg
              )
            );
          },
        },
      ]);
    }

    setInput('');
  };

  const clearChat = () => {
    setMessages([]);
    setCedulas('');
    setTotalCedulas(0);
    setHasProcessedCedulas(false);

    notification.info({
      message: 'Chat Limpio',
      description: 'Se ha limpiado el chat del asistente virtual',
      placement: 'bottomRight',
      duration: 3,
      icon: <img src={customIcon} alt="Custom Icon" style={{ width: '30px', height: '30px' }} />,
      className: 'custom-notification',
      style: {
        backgroundColor: '#1d1c1c',
      },
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);

    notification.success({
      message: 'Éxito',
      description: 'Cédulas copiadas al portapapeles',
      placement: 'bottomRight',
      duration: 3,
      icon: <img src={customIcon} alt="Custom Icon" style={{ width: '30px', height: '30px' }} />,
      className: 'custom-notification',
      style: {
        backgroundColor: '#1d1c1c',
      },
    });
  };

  return (
    <div className="messages" style={{
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <MessageList messages={messages} copyToClipboard={copyToClipboard} />
      <InputForm
        input={input}
        setInput={setInput}
        handleSend={handleSend}
        clearChat={clearChat}
      />
    </div>
  );
};

export default MessageHandler;
