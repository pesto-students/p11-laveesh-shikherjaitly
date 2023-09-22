import React from 'react';
import './App.css';

const BookList = () => {
  const books = [
    { title: 'Book 1', author: 'Author 1', year: 2020 },
    { title: 'Book 2', author: 'Author 2', year: 2018 },
    { title: 'Book 3', author: 'Author 3', year: 2022 },
  ];

  return (
    <div>
      <h2>Books List</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>Title: </strong> {book.title}<br />
            <strong>Author: </strong> {book.author}<br />
            <strong>Year: </strong> {book.year}<br />
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BookList />
    </div>
  );
}

export default App;
