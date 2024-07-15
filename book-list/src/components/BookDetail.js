// src/components/BookDetail.js
import React from 'react';

const BookDetail = ({ book }) => {
  if (!book) return <div>Select a book to see details</div>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetail;