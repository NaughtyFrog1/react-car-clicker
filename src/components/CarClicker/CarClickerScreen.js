import React from 'react'
import CarItem from './CarItem'

const CarClickerScreen = () => {
  return (
    <>
      <h1>CarClickerScreen</h1>
      <hr />
      <div className="row g-5">
        <div className="col-md-5">
          <h2>Car List</h2>
          <ul className="list-group shadow">
            <CarItem clickCount={2} name="An item" />
            <CarItem clickCount={1} name="A second item" />
          </ul>
        </div>
        <div className="col-md-7">
          <h2>Some Car model</h2>
        </div>
      </div>
    </>
  )
}

export default CarClickerScreen
