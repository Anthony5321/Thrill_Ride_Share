import { useParams, NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const RideDetails = ({ getRides, park, ride }) => {
  let { id } = useParams()
  console.log(id);
  const [rideDetails, setRideDetails] = useState({})
  const [updated, setUpdated] = useState(false)
  const navigate = useNavigate()

  const rideInfo = ride.find((ride) => ride._id === id)

  useEffect(() => {
    setRideDetails(rideInfo)
  }, [ride])

  const parkDetails = () => {
    if (rideDetails !== undefined) {
      const parks = park.find((park) => park._id === rideInfo.park)
      return parks
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`/api/rides/${id}`, rideDetails)
    setRideDetails({ ...rideDetails })
    alert('The info on this ride has been updated!')
    window.location.reload(false)
  }

  const update = () => {
    setUpdated(true)
  }

  const handleChange = (e) => {
    setRideDetails({ ...rideDetails, [e.target.id]: e.target.value })
  }

  const deleted = async () => {
    let text = 'Are you sure to delete this ride?'
    if (window.confirm(text) === true) {
      await axios.delete(`/api/rides/${id}`, rideDetails)
      setRideDetails({ ...rideDetails })
      navigate('/')
      getRides()
    }
  }

  return (
    <div className="ride-content">
      <div>
        <h1>{rideDetails?.name}</h1>
      </div>
      <section className="image-container">
        <a href={rideDetails?.website}>
          <img src={rideDetails?.image} alt="" />
        </a>
      </section>
      <section className="details">
        <div className="flex-row">
          <div className="detail">
            <h3>Description:</h3>
            <p>{rideDetails?.description}</p>
          </div>
          <div className="detail">
            <h3>Category: {rideDetails?.category}</h3>
          </div>
          <div className="detail">
            <h3>Height: {rideDetails?.height}</h3>
          </div>
          <div className="detail">
            <h3>Speed: {rideDetails?.speed}</h3>
          </div>
          <div className="detail">
            <h3>Park: {parkDetails()?.name}</h3>
          </div>
        </div>
      </section>
      <h4>
        Update Ride Info: Please fill in the update info in the corresponding
        field
      </h4>
      <div>
        <button onClick={update}>Update Info</button>
        {updated && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              onChange={handleChange}
              value={rideDetails.name}
            />
            <label htmlFor="image">Image Url:</label>
            <input
              type="text"
              id="image"
              onChange={handleChange}
              value={rideDetails.image}
            />
            <label htmlFor="description">Description:</label>
            <textarea
              cols="40"
              rows="5"
              id="description"
              onChange={handleChange}
              value={rideDetails.description}
            ></textarea>
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              onChange={handleChange}
              value={rideDetails.category}
            />
            <label htmlFor="height">Height:</label>
            <input
              type="text"
              id="height"
              onChange={handleChange}
              value={rideDetails.height}
            />
            <label htmlFor="speed">Speed:</label>
            <input
              type="text"
              id="speed"
              onChange={handleChange}
              value={rideDetails.speed}
            />
            <label htmlFor="park">Park:</label>
            <select id="park" onChange={handleChange} value={rideDetails.park}>
              {park.map((park) => (
                <option value={`${park._id}`} key={park._id}>
                  {park.name}
                </option>
              ))}
            </select>
            <button type="submit" className="buttom">
              Send Update
            </button>
          </form>
        )}
      </div>
      <div className="delete">
        <h4>Delete Ride:</h4>
        <button onClick={deleted} className="buttom">
          Delete
        </button>
      </div>
      <div>
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
      </div>
    </div>
  )
}

export default RideDetails
