import { useState } from 'react';
import Message from './Message';

const QuestionForm = ({ socketConnected }) => {
  const [message, setMessage] = useState('');
  const [anw, setAnw] = useState(false);

  const sendMessage = () => {
    socketConnected.emit('new-message', { message });
    setMessage('');
    setAnw(true);
  };

  const handleInputMessageChange = (e) => {
    setMessage(e.target.value);
  };

  if (anw) return <Message />;
  return (
    <>
      <input
        className="message-form-message"
        value={message}
        placeholder="Enter a location"
        type="text"
        onChange={handleInputMessageChange}
      />
      <button className="message-form-button" onClick={sendMessage}>
        Send
      </button>
    </>
  );
};

export default QuestionForm;
