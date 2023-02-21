const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Rides = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String, required: true },
    category: { type: String, required: true },
    height: { type: String },
    speed: { type: String },
    park: { type: Schema.Types.ObjectId, ref: 'Parks' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Rides', Rides)
