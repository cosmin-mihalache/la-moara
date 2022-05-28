import ChatBox from './ChatBox';
import MessageForm from './MessageForm';
import './Chat.css';
import './Notification.css';
import Notification from './Notification';

const Chat = ({ socketConnected }) => {
  return (
    <>
      <Notification socketConnected={socketConnected} />
      <div className="chat">
        <ChatBox socketConnected={socketConnected} />
        <MessageForm socketConnected={socketConnected} />
      </div>
    </>
  );
};

export default Chat;
