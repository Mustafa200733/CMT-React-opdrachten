import FlashCard from "./FlashCard";

const FlashCardList = ({ FlashCards }) => {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="grid grid-cols-5 gap-12 w-full max-w-7xl">
        {FlashCards.map(flashCard => (
          <FlashCard FlashCard={flashCard} key={flashCard.id} />
        ))}
      </div>
    </div>
  );
};

export default FlashCardList;
