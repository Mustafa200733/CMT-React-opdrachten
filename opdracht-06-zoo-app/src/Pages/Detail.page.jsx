// src/Pages/Detail.page.jsx
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data.js';

const DetailPage = () => {
  const { id} = useParams();
  const navigate = useNavigate();
  const [animalList] = useState(animals);
  
  const animal = animalList.find(a => a.id === Number(id))

  if (!animal) {
    return (
      <div>
        <button onClick={() => navigate(-1)}>Terug</button>
        <p>Dier niet gevonden!</p>
      </div>
    );
  }

  return (
    <section>
      <button onClick={() => navigate(-1)}>
        ← Terug
      </button>
      
      <h2>{animal.name}</h2>
      <p>{animal.description}</p>
      <img src={animal.imageUrl} alt="" />          
    </section>
  );
};

export default DetailPage;