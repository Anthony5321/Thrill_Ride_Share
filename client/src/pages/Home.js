import { useState } from 'react'
import Search from '../components/Search'
import axios from 'axios'
import RideCard from '../components/RideCard'
import ParkCard from '../components/ParkCard'
import { Link } from 'react-router-dom'

const Home = ({ park, ride }) => {
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getSearchResults = async (e) => {
    e.preventDefault()
    const res = await axios.get(`/api/rides/${searchQuery}`)
    setSearchResults(res.data.ride)
    toggleSearched(true)
    setSearchQuery('')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const newly_add = ride[ride.length - 1]

  return (
    <div>
      <h1 className="slogan">Let your worries fly past you</h1>
      <div>
        <Search
          onSubmit={getSearchResults}
          value={searchQuery}
          onChange={handleChange}
        />
      </div>
      {searched && (
        <div>
          <h2>Search Results</h2>
          <section className="container-grid">
            {searchResults.map((result) => (
              <Link to={`/rides/details/${result._id}`} key={result._id}>
                <RideCard name={result.name} image={result.image} />
              </Link>
            ))}
          </section>
        </div>
      )}
      <div>
        <h2 className="parks-title">Parks</h2>
        <section className="container-grid">
          {park.map((park) => (
            <Link to={`/view/park/${park._id}`} key={park._id}>
              <ParkCard
                image={park.image}
                name={park.name}
                location={park.location}
              />
            </Link>
          ))}
        </section>
      </div>
      <div>
        <h2>Newly Added Ride</h2>
        <Link
          to={`/rides/details/${newly_add?._id}`}
          key={newly_add?._id}
          className="container-grid"
        >
          <RideCard name={newly_add?.name} image={newly_add?.image} />
        </Link>
      </div>
    </div>
  )
}

export default Home
