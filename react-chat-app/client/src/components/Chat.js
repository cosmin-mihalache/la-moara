import ChatBox from './ChatBox';
import MessageForm from './MessageForm';
import './Chat.css';

const Chat = ({ socketConnected }) => {
  return (
    <div className="chat">
      <ChatBox socketConnected={socketConnected} />
      <MessageForm socketConnected={socketConnected} />
    </div>
  );
};

export default Chat;
