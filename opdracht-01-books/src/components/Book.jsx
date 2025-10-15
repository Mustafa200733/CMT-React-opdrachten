import { useState } from "react";

const Book = ({img, title, author, verhoogTeller}) => {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
 
function verhoogTeller(){
  setAantalKeerGelezen((vorigWaarde) => vorigWaarde + 1);
}
 
function verlaagTeller(){
  setAantalKeerGelezen((vorigWaarde) => Math.max(0, vorigWaarde - 1 ));
}
  return (
    <section class="book-container">
    <img class="image" src={img} alt={title} />
    <h2>{title}</h2>
      <button onClick={verhoogTeller}>Keer gelezen: {aantalKeerGelezen}</button>
      <button onClick={verlaagTeller}>verlaagt: {aantalKeerGelezen}</button>
        <h3>{author}</h3>
    </section>
    );
}
 
export default Book;
      

