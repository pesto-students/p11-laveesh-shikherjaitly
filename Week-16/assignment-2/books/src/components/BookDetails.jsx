import React from 'react';

const BookDetails = ( { title, author, year } ) => {
    return (
        <div className="book-detail">
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Year: {year}</p>
        </div>
    )
}
export default BookDetails;