import Food from './food';
const mockFoodGet = [
  {
    id: 1,
    name: 'Faina de malai',
    price: 4,
    category: 'Produse de morarit',
    color: '#ffffe8',
  },
  { id: 2, name: 'Portocale', price: 5, category: 'Fructe', color: '#fff6e8' },
  { id: 3, name: 'Cirese', category: 'Fructe', color: '#ffe8e8' },
];
const Exercise1 = () => {
  return (
    <div className="exercise">
      Exercise 1
      <div className="exercise-center">
        {mockFoodGet.map((food) => (
          <Food key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Exercise1;
