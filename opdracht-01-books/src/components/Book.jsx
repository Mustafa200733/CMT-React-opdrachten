const Book = ({image, title, author}) => {
  return (
    <section className="book-container">
    <img className="image" src={image} alt="" />
    <h2>{title}</h2>
    <h3>{author}</h3>
    </section>
    );
}
 
export default Book;
      

