const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const { connectDB } = require('./src/config/db')
const cors = require('cors')
const usersRouter = require('./src/api/routes/user')
const juegosRouter = require('./src/api/routes/juego')

const app = express()

connectDB()

app.use(cors())

app.use(express.json())

app.use('/api/v1/juegos', juegosRouter)
app.use('/api/v1/users', usersRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
