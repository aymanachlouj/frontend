import React from 'react'
import BookList from '../components/BookList'
import Sidebare from '../components/sidebare'

function BookPage() {
  return (
    <>
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <Sidebare />
        </div>
        <div className="col-12 col-sm-9 col-xl-10 px-sm-2 px-0 mt-3">
          <BookList />
        </div>
      </div>
    </div>
    </>
    )
}

export default BookPage


