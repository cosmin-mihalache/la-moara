import { useState } from 'react';
import './MessageForm.css';

const MessageForm = ({ socketConnected }) => {
  const [message, setMessage] = useState('');
  const [sender, setSender] = useState('');

  const sendMessage = () => {
    socketConnected.emit('new-message', { message: `${sender}: ${message}` });
    setMessage('');
  };

  const handleInputMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleInputNameChange = (e) => {
    setSender(e.target.value);
  };

  return (
    <div className="message-form">
      <input
        className="message-form-name"
        value={sender}
        placeholder="Name"
        type="text"
        onChange={handleInputNameChange}
      />
      <input
        className="message-form-message"
        value={message}
        placeholder="Enter a message"
        type="text"
        onChange={handleInputMessageChange}
      />
      <button className="message-form-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default MessageForm;
