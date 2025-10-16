import { useState } from "react";

const Book = ({ img, title, author }) => {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);

  function verhoogTeller() {
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  }

  function verlaagTeller() {
    setAantalKeerGelezen(
      aantalKeerGelezen > 0 ? aantalKeerGelezen - 1 : 0
    );
  }

  return (
    <section className="book-container">
      <img className="image" src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={verhoogTeller}>
        Keer gelezen: {aantalKeerGelezen}
      </button>
      <button onClick={verlaagTeller}>
        Verlaag: {aantalKeerGelezen}
      </button>
      <h3>{author}</h3>
    </section>
  );
};

export default Book;


