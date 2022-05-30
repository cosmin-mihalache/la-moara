import { useEffect, useState } from 'react';
import Answers from './Answers';
import './QApp.css';
import QuestionForm from './QuestionForm';
import Stats from './Stats';

const QApp = ({ socketConnected }) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    socketConnected.on('received-message', (answer) => {
      setAnswers(answer);
    });
  }, []);

  // TODO: [] Maybe draw the [] {city: Timisoara, count: 3} on b-end or f-end

  return (
    <div className="qapp">
      <h4>Where are you from?</h4>
      <QuestionForm socketConnected={socketConnected} />
      <Stats socketConnected={socketConnected} answers={answers} />
      <Answers socketConnected={socketConnected} answers={answers} />
    </div>
  );
};

export default QApp;
