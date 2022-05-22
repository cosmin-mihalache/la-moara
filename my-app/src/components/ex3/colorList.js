import './colorList.css';

const ColorList = ({ color, deleteColor }) => {
  const handleDelete = () => {
    deleteColor(color.id);
  };
  return (
    <div className="list-container">
      <li className="list-li">{color.name}</li>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ColorList;
