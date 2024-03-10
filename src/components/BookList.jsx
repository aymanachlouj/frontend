import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);



  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/books/')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const toggleText = (index) => {
    setBooks(prevBooks => prevBooks.map((book, i) => {
      if (i === index) {
        return { ...book, showMore: !book.showMore };
      } else {
        return book;
      }
    }));
  };

  return (
    <>
  <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {books.map((book, index) => (
          <div className="col mb-4" key={index}>
            <div className="card h-100">
              <img src={book.cover} className="card-img-top img-fluid" alt={`Cover of ${book.title}`} style={{ maxHeight: "400px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{book.authorName}</h6>
                <p className="card-text text-muted">
                  {book.showMore ? book.description : book.description.substring(0, 100)}
                  {!book.showMore && <span>...</span>}
                </p>
                <button className="btn btn-primary" onClick={() => toggleText(index)}>
                  {book.showMore ? 'Afficher moins' : 'Afficher plus'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    </>
  );
}

export default BookList;