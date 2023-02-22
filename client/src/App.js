import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './Pages/About'
import Home from './Pages/Home'
import rideDetails from './Pages/rideDetails'
import viewPark from './Pages/viewPark'
import addRide from './Pages/addRide'
import addPark from './Pages/addPark'

function App() {
  const [park, setPark] = useState([])
  const initRide = {
    name: '',
    image: '',
    description: '',
    category: '',
    height: '',
    speed: '',
    park: ''
  }

  const getParks = async () => {
    try {
      const res = await axios.get('http://localhost:3001/parks')
      setPark(res.data.parks)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getParks()
  }, [])

  const [ride, setRide] = useState([])

  const getRides = async () => {
    try {
      const res = await axios.get('http://localhost:3001/rides')
      setRide(res.data.rides)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getRides()
  }, [])

  return (
    <div className="App">
      <Nav />
      <main>
      <Routes>
          <Route
            path="/"
            element={<Home park={park} />}
          />
          <Route path="about" element={<About />} />
          <Route
            path="rides/details/:id"
            element={
              <rideDetails
                park={park}
                getRides={getRides}
              />
            }
          />
          <Route
            path="view/park/:id"
            element={<viewPark ride={ride} park={park} />}
          />
          <Route
            path="add/"
            element={
              <addRide
                getRides={getRides}
                initRide={initRide}
                park={park}
              />
            }
          />
          <Route
            path="add/park"
            element={<addPark getParks={getParks} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
