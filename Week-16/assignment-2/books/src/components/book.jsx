import React, { PureComponent } from "react";

class Book extends PureComponent {
  render() {
    const { title, author, year } = this.props;

    return (
      <div className="book">
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Year: {year}</p>
      </div>
    );
  }
}

export default Book;