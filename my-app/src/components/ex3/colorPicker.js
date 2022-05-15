import './colorPicker.css';
import { useState } from 'react';

const ColorPicker = ({ addColor }) => {
  const [color, setColor] = useState({ name: '#eb4034' });

  const handleClick = () => {
    addColor(color);
  };

  const updateColor = (e) => {
    setColor({ name: e.target.value });
  };
  return (
    <div className="color-picker">
      <input type="color" value={color.name} onChange={updateColor}></input>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default ColorPicker;
