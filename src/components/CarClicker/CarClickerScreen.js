import React, { useEffect, useReducer } from 'react'
import CarsContext from '../../cars/CarsContext'
import cars from '../../data/cars'
import carsReducer from '../../cars/carsReducer'
import CarsRouter from '../../Routers/CarsRouter'

const init = () => JSON.parse(localStorage.getItem('cars')) || cars

const CarClickerScreen = () => {
  const [state, dispatch] = useReducer(carsReducer, cars, init)

  useEffect(() => {
    localStorage.setItem('cars', JSON.stringify(state))
  }, [state])


  return (
    <CarsContext.Provider value={{ state, dispatch }}>
      <h1>CarClickerScreen</h1>
      <hr />
      <CarsRouter />
    </CarsContext.Provider>
  )
}

export default CarClickerScreen
