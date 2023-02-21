const db = require('../db')
const Rides = require('../models/rides')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const rides = [
    {
        name: 'Batman the Dark Knight',
        image:
          'https://i.pinimg.com/originals/c9/87/80/c987804a202a9d4de6a5e4d064973ee0.jpg',
        description:
          'The ride is based on the popular Batman franchise and provides riders with a thrilling experience through intense twists, turns, and drops.',
        category: 'Roller Coaster',
        height: '54 inches',
        speed: '55mph',
        park: '63f52ad6bcd21886d96acf54'
      }
  ]

  await Rides.insertMany(rides)
  console.log('Created some rides!')
}
const run = async () => {
  await main()
  db.close()
}

run()
