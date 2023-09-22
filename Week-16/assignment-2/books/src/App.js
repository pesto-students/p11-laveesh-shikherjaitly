// import React, { Component } from 'react'
import BookList from './components/BookList'
import './App.css';
import WithLogging from './components/withLogging';

const EnhancedBookList = WithLogging(BookList);

const App = () => {
  const books = [
    { title: 'Book 1', author: 'Author 1', year: 2020 },
    { title: 'Book 2', author: 'Author 2', year: 2018 },
    { title: 'Book 3', author: 'Author 3', year: 2022 },
   
  ];

  return (
    <div className="app">
      <EnhancedBookList books={books} />
    </div>
  );
};

export default App;


// const BookDetails = ({ title,author,year }) => {

//   return(
//     <div>
//       <ul>
//         <li>Title: </li>

//       </ul>
//     </div>
//   )
// }


