import BookCounter from './BookCounter';
import {useState} from 'react';
import Book from './Book';

const BookList = () => {
  
  const [books, setBooks] = useState([{

title : 'Harry potter And The Sorcerers stone',
author :  'Joanne Rowling',
image : './images/book-1.png',
},

{
title :'Geronimo Stilton Fantasia 4',
author :'Elisabetta Dami',
image : './images/book-2.png',
},

{
title :'The Hunger Games',
author : 'Suzanne Collin',
image :'./images/book-3.png',
},
]);


    return (
    <section className="BookBody">
      <BookCounter aantal={books.length} />
 
   
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.author}
          img={book.image}
          button={book.aantalKeerGelezen}
          btn={book.Btn}
        />
      ))}
    </section>
  );
};
 
export default BookList;

