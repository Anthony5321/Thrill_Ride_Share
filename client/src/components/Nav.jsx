import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <header>
      <nav className='links'>
        <h3 className='link-title'>Thrill RideShare</h3>
        <div>
          <Link to="/" className="inactive" activeclassname="active">Home</Link>
          <Link to="/About" className="inactive" activeclassname="active">About</Link>
          <Link to="/add" className="inactive" activeclassname="active">Add Ride</Link>
          <Link to="/add/park" className="inactive" activeclassname="active">Add Park</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav