const db = require('../db')
const parks = require('../models/parks')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const parks = [
    {
      name: 'Six flags',
      location: 'Agawam, MA',
      image: 'https://i.imgur.com/WOsxgIS.jpg',
      website: 'https://www.sixflags.com/newengland',
      hours: '11 am to 7 pm except tuesday, and wednesday it is 11 am to 6 pm'
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
