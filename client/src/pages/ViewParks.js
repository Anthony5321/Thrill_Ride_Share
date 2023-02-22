import { NavLink, useParams } from 'react-router-dom'
import RideCard from '../components/RideCard'

const ViewRides = ({ ride, park }) => {
  let { id } = useParams()
  const parks = park.find((park) => park._id === id)
  const rideDetails = ride.filter((ride) => ride.park === parks._id)

  return (
    <div>
      <h1>{parks.name}</h1>
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
