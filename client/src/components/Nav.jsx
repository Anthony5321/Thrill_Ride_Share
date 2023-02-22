import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <header>
      <nav className='links'>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/add">Add Park</Link>
        <Link to="/add/ride">Add Ride</Link>
      </nav>
    </header>
  )
}

export default Nav