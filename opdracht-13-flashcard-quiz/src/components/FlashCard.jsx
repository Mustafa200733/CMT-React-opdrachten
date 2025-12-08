import { useState } from "react";

const FlashCard = ({ FlashCard }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div 
      onClick={() => setFlip(!flip)}
      className="
        w-64 h-40 bg-white shadow-lg rounded-xl p-4
        flex items-center justify-center text-center
        cursor-pointer select-none
        transition-transform duration-300 hover:scale-105
      "
    >
      <p className="text-lg font-semibold text-gray-800">
        {flip ? FlashCard.answer : FlashCard.question}
      </p>
    </div>
  );
};

export default FlashCard;
