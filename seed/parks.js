const db = require('../db')
const parks = require('../models/parks')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const parks = [
    {
      name: 'Six flags',
      city: 'Agawam, MA',
      logo: ''
    }
  ]

  await Store.insertMany(parks)
  console.log('Created some parks!')
}
const run = async () => {
  await main()
  db.close()
}

run()
