import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './pages/About'
import Home from './pages/Home'
import RideDetails from './pages/RideDetails'
import ViewParks from './pages/ViewParks'
import AddRide from './pages/AddRide'
import AddPark from './pages/AddPark'

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
          <Route path="/" element={<Home park={park} />} />
          {/* <Route path="/About" element={<About />} /> */}
          {/* <Route
            path="rides/details/:id"
            element={<RideDetails park={park} />}
          /> */}
          {/* <Route
            path="view/park/:id"
            element={<ViewParks ride={ride} park={park} />}
          /> */}
          <Route
            path="add/"
            element={
              <AddRide getRides={getRides} initRide={initRide} park={park} />
            }
          />
          <Route path="add/park" element={<AddPark getParks={getParks} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
