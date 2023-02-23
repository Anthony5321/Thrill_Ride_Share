import { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import RideCard from '../components/RideCard'

const ViewRides = ({ ride, park }) => {
  let { id } = useParams()
  const parks = park.find((park) => park._id === id)
  const rideDetails = ride.filter((ride) => ride.park === parks._id)

  useEffect(() => {}, [park])

  return (
    <div>
      <div className="park-info">
        <h1>{parks?.name}</h1>
        <h3>Location: {parks?.location}</h3>
        <h3>Website: {parks?.website}</h3>
        <h3>Park Hours: {parks?.hours}</h3>
      </div>
      <div className="container-grid">
        {rideDetails.map((ride) => (
          <NavLink to={`/rides/details/${ride._id}`} key={ride._id}>
            <RideCard image={ride.image} name={ride.name} />
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default ViewRides
