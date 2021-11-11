import React, { useContext } from 'react'
import CarsContext from '../../cars/CarsContext'

const CarClicker = ({ carId }) => {
  const { state, dispatch } = useContext(CarsContext)

  const { id, name, imgSrc, clickCount } = state.find((car) => car.id === carId)

  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h2>{name}</h2>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => dispatch({ type: 'vote', payload: {id} })}
        >
          Vote Count{' '}
          <span className="badge bg-secondary">{clickCount}</span>
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
