import { useState } from "react";

const Book = ({ img, title, author, category, description, year, pages }) => {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
  const [liked, setLiked] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  function toggleLike(e) {
    e.stopPropagation();
    setLiked(!liked);
  }

  function verhoogTeller(e) {
    e.stopPropagation();
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  }

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  return (
    <article 
      className={`book ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="book-inner">

        <div className="book-front">
          <img className="img" src={img} alt={title} />
          <h2>{title}</h2>
          <h3>{author}</h3>
          <p>Categorie: {category}</p>

          <button onClick={verhoogTeller}>
            Keer gelezen: {aantalKeerGelezen}
          </button>

          <div className="favorite-section">
            <button onClick={toggleLike}>
              {liked ? "❤️" : "🤍"}
            </button>
            {liked && <p className="favorited-text">Toegevoegd aan favorieten</p>}
          </div>
        </div>

        <div className="book-back">
          <h2>Details</h2>
          <p>Publicatiejaar: {year}</p>
          <p>Pagina's: {pages}</p>
          <p>{description}</p>
          <p><i>Klik om terug te gaan</i></p>
        </div>

      </div>
    </article>
  );
};

export default Book;
