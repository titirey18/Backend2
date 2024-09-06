const { isAuth } = require('../../middlewares/auth')
const {
  getJuegos,
  getJuegoById,
  postJuego,
  updateJuego,
  deleteJuego
} = require('../controllers/juego')

const juegosRouter = require('express').Router()

juegosRouter.get('/', getJuegos)
juegosRouter.get('/:id', getJuegoById)
juegosRouter.post('/', isAuth, postJuego)
juegosRouter.put('/:id', isAuth, updateJuego)
juegosRouter.delete('/:id', isAuth, deleteJuego)

module.exports = juegosRouter
