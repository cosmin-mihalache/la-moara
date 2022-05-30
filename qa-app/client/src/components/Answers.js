const Answers = ({ answers }) => {
  return (
    <div>
      {answers.map((answer, index) => (
        <li key={index}>{answer.message}</li>
      ))}
    </div>
  );
};

export default Answers;
