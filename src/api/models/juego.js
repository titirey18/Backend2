const mongoose = require('mongoose')

const juegoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    valoration: { type: Number, required: true }
  },
  {
    timestamps: true,
    collection: 'juegos'
  }
)

const Juego = mongoose.model('juegos', juegoSchema, 'juegos')
module.exports = Juego
