import { useState } from 'react'
import Search from '../components/Search'
import axios from 'axios'
import RideCard from '../components/RideCard'
import ParkCard from '../components/ParkCard'
import { Link } from 'react-router-dom'

const Home = ({ parks, parkName }) => {
    const [searchResults, setSearchResults] = useState([])
    const [searched, toggleSearched] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')