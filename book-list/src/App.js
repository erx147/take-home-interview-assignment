// src/App.js
import React, { useState } from 'react';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div>
      <BookList selectBook={setSelectedBook} />
      <BookDetail book={selectedBook} />
    </div>
  );
};

export default App;