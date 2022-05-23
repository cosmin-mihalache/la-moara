import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import Chat from './components/Chat';

function App() {
  const [socketConnected, setSocketConnected] = useState();

  // const addMessage = (message) => {
  //   const newMessages = [...messages];
  //   newMessages.push(message);

  //   setMessages((message) => {
  //     return [...messages, message];
  //   });
  // };
  useEffect(() => {
    const socket = io();
    socket.on('connected', () => {
      setSocketConnected(socket);
    });

    // socket.on('received-message', (message) => {
    //   addMessage(message);
    // });
  }, []);

  if (!socketConnected) return <p>Waiting for connection!</p>;
  return <Chat socketConnected={socketConnected} />;
}

export default App;
