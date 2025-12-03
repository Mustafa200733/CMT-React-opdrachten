import { useState } from "react";

const Book = ({ img, title, author, category }) => {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);

  function verhoogTeller() {
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  }

  return (
    <section className="book-container">
      <img className="image" src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={verhoogTeller}>
        Keer gelezen: {aantalKeerGelezen}
      </button>
    <p>categorie: {category}</p>
      <h3>{author}</h3>
      
    </section>
  );
};

export default Book;


