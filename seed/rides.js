const db = require('../db')
const rides = require('../models/rides')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const rides = [
    {
      name: 'Six flags',
      city: '',
      logo: ''
    }
  ]

  await Store.insertMany(rides)
  console.log('Created some rides!')
}
const run = async () => {
  await main()
  db.close()
}

run()