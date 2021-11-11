import React, { useContext } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import CarsContext from '../cars/CarsContext'
import CarClicker from '../components/CarClicker/CarClicker'
import CarList from '../components/CarClicker/CarList'

const CarsRouter = () => {
  const { state } = useContext(CarsContext)

  return (
    <Router>
      <div className="row g-5">
        <div className="col-md-5">
          <h2>Car List</h2>
          <CarList />
        </div>
        <div className="col-md-7">
          <Switch>
            {state.map((car) => (
              <Route path={`/${car.id}`} key={car.id}>
                <CarClicker carId={car.id} />
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default CarsRouter
