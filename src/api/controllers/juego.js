const Juego = require('../models/juego')

const getJuegos = async (req, res, next) => {
  try {
    const juegos = await Juego.find()
    return res.status(200).json(juegos)
  } catch (error) {
    return res.status(400).json('error')
  }
}

const getJuegoById = async (req, res, next) => {
  try {
    const { id } = req.params
    const juego = await Juego.findById(id)
    return res.status(200).json(juego)
  } catch (error) {
    return res.status(400).json('error')
  }
}

const postJuego = async (req, res, next) => {
  try {
    const newjuego = new Juego(req.body)
    const juego = await newjuego.save()
    return res.status(201).json(juego)
  } catch (error) {
    return res.status(400).json('error')
  }
}

const updateJuego = async (req, res, next) => {
  try {
    const { id } = req.params
    const newjuego = new Juego(req.body)
    newJuego._id = id
    const juegoUpdated = await Juego.findByIdAndUpdate(id, newjuego, {
      new: true
    })
    return res.status(200).json(juegoUpdated)
  } catch (error) {
    return res.status(400).json('error')
  }
}

const deleteJuego = async (req, res, next) => {
  try {
    const { id } = req.params
    const juego = await Juego.findByIdAndDelete(id)
    return res.status(200).json({
      mensaje: 'Ha sido eliminado con éxito',
      libroEliminado: juego
    })
  } catch (error) {
    return res.status(400).json('error')
  }
}

module.exports = {
  getJuegos,
  getJuegoById,
  postJuego,
  updateJuego,
  deleteJuego
}
