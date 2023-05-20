const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./Routes/api')
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')
const mongoose = require('mongoose')
require('dotenv').config()

app.use(bodyParser.json({ type: 'application/*+json' }))
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  )

  next()
})

app.use(cors())
app.use(express.json())
app.use('/', api)

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`)

  socket.on('join_room', (data) => {
    socket.join(data)
    console.log(`User with ID: ${socket.id} joined room: ${data}`)
  })

  socket.on('send_message', (data) => {
    socket.to(data.room).emit('receive_message', data)
  })

  socket.on('disconnect', () => {
    console.log('User Disconnected', socket.id)
  })
})

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    dbName: 'instagram',
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to DB', process.env.MONGO_URI)

    server.listen(process.env.PORT, function () {
      console.log(`express server is running on port ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })
