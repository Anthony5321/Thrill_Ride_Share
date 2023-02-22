import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  const [park, setPark] = useState([])
  const initPark = {
    name: '',
    image: '',
    website: '',
    location: '',
    hours: ''
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
    </div>
  )
}

export default App
