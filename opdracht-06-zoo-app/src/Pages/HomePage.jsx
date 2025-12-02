import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import animalsData from '../data.js';
import Card from '../Components/Card.jsx';

const HomePage = () => {
  const [animals, setAnimals] = useState(animalsData);
  const [searchInput, setSearchInput] = useState('');

  const navigate = useNavigate();

  const goToDetail = (animalId) => {
    navigate(`/animal/${animalId}`);
  };

  const searchHandler = (e) => {
    const newSearch = e.target.value;
    setSearchInput(newSearch);

    const filteredAnimals = animalsData.filter((animal) =>

      animal.name.toLowerCase().includes(newSearch.toLowerCase())
    )

    setAnimals(filteredAnimals);
  };

  return (
    <>
      <div className='search'>
        <input
          type="text"
          placeholder="zoek hier een dier"
          name="search"
          onChange={searchHandler}
        />
      </div>

      <section>
        {animals.map((animal) => (
          <Card
            key={animal.id}
            animal={animal}
            onShowDetail={goToDetail}
          />
        ))}
      </section>
    </>
  );
};

export default HomePage;
