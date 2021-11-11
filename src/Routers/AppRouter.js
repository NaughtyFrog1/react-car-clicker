import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AboutScreen from '../components/About/AboutScreen'
import CarClicker from '../components/CarClicker/CarClickerScreen'
import Navbar from '../components/Navbar/Navbar'

const AppRouter = () => {
  return (
    <Router>
      <Navbar />

      <div className="container-md mt-4">
        <Switch>
          <Route path="/about"><AboutScreen /></Route>
          <Route path="/"><CarClicker /></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
