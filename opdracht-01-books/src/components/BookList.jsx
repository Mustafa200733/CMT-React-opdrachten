import { useState } from 'react';
import booksData from '../data.js';
import BookCounter from './BookCounter';
import Book from './Book';

const BookList = () => {
  const [books, setBooks] = useState(booksData);
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['Alle', 'Fantasy', 'Avontuur', 'Sciencefiction', 'Thriller', 'Romance'];

  const filterHandler = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === 'Alle') {
      setBooks(booksData);
    } else {
      const filteredBooks = booksData.filter((book) => book.category === category);
      setBooks(filteredBooks);
    }
  };

  const searchHandler = (e) => {
    const newSearch = e.target.value;
    setSearchInput(newSearch);

    const filteredBooks = booksData.filter((book) =>
      book.title.toLowerCase().includes(newSearch.toLowerCase())
    );

    setBooks(filteredBooks);
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="zoek hier een boek"
          name="search"
          onChange={searchHandler}
        />
      </div>

      <div className="filter">
        <label htmlFor="category">Filter op categorie:</label>

        <select
          id="category"
          value={selectedCategory}
          onChange={filterHandler}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

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
            category={book.category}
            description={book.description}
            year={book.year}
            pages={book.pages}

          />
        ))}
      </section>
    </>
  );
};

export default BookList;
