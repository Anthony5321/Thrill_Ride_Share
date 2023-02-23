const Rides = require('../models/rides')
const Parks = require('../models/parks')

const createRide = async (req, res) => {
  try {
    const ride = await new Rides(req.body)
    await ride.save()
    return res.status(201).json({
      ride
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createPark = async (req, res) => {
  try {
    const park = await new Parks(req.body)
    await park.save()
    return res.status(201).json({
      park
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllParks = async (req, res) => {
  try {
    const parks = await Parks.find()
    return res.status(200).json({ parks })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllRides = async (req, res) => {
  try {
    const rides = await Rides.find()
    return res.status(200).json({ rides })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getRideByName = async (req, res) => {
  try {
    const rideName = req.params.name
    const ride = await Rides.find({
      name: { $regex: `${rideName}`, $options: 'i' }
    })
    if (ride) {
      return res.status(200).json({ ride })
    }
    return res.status(404).send('Rides with the specified Name does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getRideById = async (req, res) => {
  try {
    const { id } = req.params
    const ride = await Rides.findById(id)
    if (ride) {
      return res.status(200).json({ ride })
    }
    return res.status(404).send('Rides with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateRide = async (req, res) => {
  try {
    const ride = await Rides.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(ride)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteRide = async (req, res) => {
  try {
    const { id } = req.params
    console.log(req.params);
    const deleted = await Rides.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Ride deleted')
    }
    throw new Error('Ride not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createPark,
  createRide,
  getAllParks,
  getAllRides,
  getRideByName,
  getRideById,
  deleteRide,
  updateRide
}
