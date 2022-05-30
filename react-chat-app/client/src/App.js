import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import Chat from './components/Chat';

function App() {
  const [socketConnected, setSocketConnected] = useState();

  useEffect(() => {
    const socket = io();
    socket.on('connected', () => {
      setSocketConnected(socket);
    });

  }, []);

  if (!socketConnected) return <p>Waiting for connection!</p>;
  return <Chat socketConnected={socketConnected} />;
}

export default App;
