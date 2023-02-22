import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <header>
      <nav className='links'>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/add">Add Ride</Link>
        <Link to="/add/park">Add Park</Link>
      </nav>
    </header>
  )
}

export default Nav