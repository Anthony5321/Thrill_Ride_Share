import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const AddRide = ({ getRides, initRide, park }) => {
  const [newRide, setNewRide] = useState(initRide)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/rides', newRide)
      setNewRide(initRide)
      getRides()
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    setNewRide({ ...newRide, [e.target.id]: e.target.value })
  }

  return (
    <div>
      <h1>Add A New Ride</h1>
      <h4>Please fill in the ride info below:</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={newRide.name}
        />
        <label htmlFor="image">Image Url:</label>
        <input
          type="text"
          id="image"
          onChange={handleChange}
          value={newRide.image}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          cols="40" rows="5"
          id="description"
          onChange={handleChange}
          value={newRide.description}> 
        </textarea>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          onChange={handleChange}
          value={newRide.category}
        />
        <label htmlFor="height">Height:</label>
        <input
          type="text"
          id="height"
          onChange={handleChange}
          value={newRide.height}
        />
        <label htmlFor="speed">Speed:</label>
        <input
          type="text"
          id="speed"
          onChange={handleChange}
          value={newRide.speed}
        />
        <label htmlFor="park">Park:</label>
        <select id="park" onChange={handleChange} value={newRide.park}>
          <option value="Select" hidden>
            Select
          </option>
          {park.map((park) => (
            <option value={`${park._id}`} key={park._id}>
              {park.name}
            </option>
          ))}
        </select>
        <button type="submit" className="add-ride-btn">
          Add Ride
        </button>
      </form>
    </div>
  )
}

export default AddRide
