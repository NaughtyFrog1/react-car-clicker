import React, { useContext } from 'react'
import CarsContext from '../../cars/CarsContext'
import CarListItem from './CarListItem'

const CarList = () => {
  const { state } = useContext(CarsContext)

  return (
    <div className="list-group shadow">
      {state.map((car) => (
        <CarListItem key={car.id} {...car} />
      ))}
    </div>
  )
}

export default CarList
