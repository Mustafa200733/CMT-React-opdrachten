import React, { useState } from 'react';
import FlashCardList from './components/FlashCardList';
import data from './components/data';

function App() {
  const [FlashCards, setFlashCards] = useState(data);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <FlashCardList FlashCards={FlashCards} />
    </div>
  );
}

export default App;
