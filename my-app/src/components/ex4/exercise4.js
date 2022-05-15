import { useEffect, useState } from 'react';

const Exercise4 = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  }, []);

  return (
    <div className="exercise">
      Exercise 4
      <li>{!loading ? 'Loading, please wait' : 'Finished loading'}</li>
    </div>
  );
};

export default Exercise4;
