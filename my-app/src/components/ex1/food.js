import './food.css';
const Food = ({ food }) => {
  return (
    <div className="food-container" style={{ backgroundColor: food.color }}>
      <div className="food-name">
        Nume: {food.name ? food.name : 'Indisponibil'}
      </div>
      <div className="food-price">
        Pret: {food.price ? food.price : 'Indisponibil'} LEI
      </div>
      <div className="food-category">
        Categoria: {food.category ? food.category : 'Indisponibil'}
      </div>
    </div>
  );
};

export default Food;
