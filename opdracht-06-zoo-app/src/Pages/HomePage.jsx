import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import animals from '../animals.js';
import Card from '../Components/Card.jsx';

const HomePage = () => {
  const navigate = useNavigate();
  const [animalList, setanimalList] = useState(animals);


  const goToDetail = (animalId) => {
    navigate(`/animal/${animalId}`);
  };

    return ( 
        <section>


   {animalList.map(animal => (
    <Card
    key={animal.id}
    animal={animal}
    onShowDetail={goToDetail}
   />
))}
</section>

 );
};
 
export default HomePage;

