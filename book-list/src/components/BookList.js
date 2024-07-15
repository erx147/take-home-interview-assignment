// src/components/BookList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://<YOUR_EC2_PUBLIC_IP>/api/books/') //use the EC2 IP from AWS
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
