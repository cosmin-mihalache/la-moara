import { useEffect, useState } from 'react';
import './Notification.css';
const Notification = ({ socketConnected }) => {
  const [messageNotification, setMessageNotification] = useState();

  useEffect(() => {
    socketConnected.on('notification', (message) => {
      setMessageNotification(message);
      setTimeout(() => {
        setMessageNotification()
      }, 5000);
    });
  }, []);

  if (!messageNotification) return null;
  return (
    <div className="notification">
      <h5>{messageNotification}</h5>
    </div>
  );
};

export default Notification;
