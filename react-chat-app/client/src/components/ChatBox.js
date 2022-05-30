import { useEffect, useState } from 'react';
import Message from './Message';

const ChatBox = ({ socketConnected }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    const newMessages = [...messages];
    newMessages.push(message);
    setMessages((message) => [...newMessages, message]);
  };

  useEffect(() => {
    socketConnected.on('received-message', (message) => {
      addMessage(message);
    });
  }, []);

  return (
    <div>
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};

export default ChatBox;
