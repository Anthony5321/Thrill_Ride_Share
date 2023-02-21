const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Parks = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true},
    location: { type: String, required: true },
    website: { type: String, required: true },
    hours: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Parks', Parks)
