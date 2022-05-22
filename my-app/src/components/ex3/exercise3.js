import { useState } from 'react';
import ColorList from './colorList';
import ColorPicker from './colorPicker';

const Exercise3 = () => {
  const [colorsPicked, setColorsPicked] = useState([
    { id: 0, name: '#eb4034' },
  ]);

  const addColor = (color) => {
    const newColors = [...colorsPicked];
    color.id = colorsPicked.length;
    newColors.push(color);
    setColorsPicked(newColors);
  };

  const deleteColor = (id) => {
    const newColor = colorsPicked.filter((color) => color.id !== id);
    setColorsPicked(newColor);
  };

  const gradientList = colorsPicked.map((c) => c.name).join(',');

  return (
    <div className="exercise">
      Exercise 3
      <div>
        <ColorPicker addColor={addColor} />
        {colorsPicked.map((color) => (
          <ColorList key={color.id} color={color} deleteColor={deleteColor} />
        ))}
      </div>
      <div
        className="exercise3"
        style={{ backgroundImage: `linear-gradient(${gradientList})` }}
      >
        Gradient Box
      </div>
    </div>
  );
};

export default Exercise3;
