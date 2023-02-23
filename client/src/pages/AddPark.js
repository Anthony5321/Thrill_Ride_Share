import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const AddPark = ({ getParks }) => {
  const initPark = {
    name: '',
    image: '',
    location: '',
    website: '',
    hours: ''
  }
  const [newPark, setNewPark] = useState(initPark)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('api/parks', newPark)
      setNewPark(initPark)
      getParks()
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    setNewPark({ ...newPark, [e.target.id]: e.target.value })
  }

  return (
    <div>
      <h1>Add A New Park</h1>
      <h3>Please fill in the park info</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={newPark.name}
        />
        <label htmlFor="image">Image Url:</label>
        <input
          type="text"
          id="image"
          onChange={handleChange}
          value={newPark.image}
        />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          onChange={handleChange}
          value={newPark.location}
        />
        <label htmlFor="website">Website:</label>
        <input
          type="text"
          id="website"
          onChange={handleChange}
          value={newPark.website}
        />
        <label htmlFor="hours">Park Hours:</label>
        <input
          type="text"
          id="hours"
          onChange={handleChange}
          value={newPark.hours}
        />
        <button type="submit" className="buttom">
          Add
        </button>
      </form>
    </div>
  )
}


export default AddPark
