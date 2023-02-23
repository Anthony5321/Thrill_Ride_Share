const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.post('/rides', controllers.createRide)
router.get('/rides', controllers.getAllRides)
router.get('/rides/:name', controllers.getRideByName)
router.put('/rides/:id', controllers.updateRide)
router.delete('/rides/:id', controllers.deleteRide)
router.get('/rides/details/:id', controllers.getRideById)
router.post('/parks', controllers.createPark)
router.get('/parks', controllers.getAllParks)

module.exports = router


