import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/books/')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="row container">
      {books.map((book) => (
        <div className="col-md-4" key={book.id}>
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={book.cover} alt={`Cover of ${book.title}`} />
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <h5 className="card-title">{book.authorName}</h5>
              <p className="card-text">{book.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;