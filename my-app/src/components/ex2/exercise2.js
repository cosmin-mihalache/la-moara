import { useState } from 'react';
import MyName from './myName';

const Exercise2 = () => {
  const [toggle, setToggle] = useState(false);
  const onClickHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className="exercise">
      Exercise 2
      <div className="exercise-center">
        <MyName onClickHandler={onClickHandler} toggle={toggle} />
      </div>
    </div>
  );
};

export default Exercise2;
