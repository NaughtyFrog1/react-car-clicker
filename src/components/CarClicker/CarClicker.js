import React from 'react'

const CarClicker = ({ id, name, imgSrc, clickCount }) => {
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h2>{name}</h2>
        <button type="button" className="btn btn-dark">
          Vote Count <span className="badge bg-secondary">{clickCount}</span>
        </button>
      </div>
      <div className="container">
        <img
          className="shadow-lg rounded-3 img-fluid mx-auto d-block"
          src={`img/${imgSrc}`}
          alt={name}
        />
      </div>
    </>
  )
}

export default CarClicker
