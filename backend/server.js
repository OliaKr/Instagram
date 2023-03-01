const express = require('express')
const app = express()
const api = require('./Routes/api')
const Users = require('./model/userSchema')
const Stories = require('./model/storySchema')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

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
const corsOptions = {
  origin: ['http://192.168.14.10:3000', 'http://localhost:3000'],
  //   credentials: true,
}
app.use('/', api)
app.use(cors(corsOptions))
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    dbName: 'instagram',
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to DB')

    app.listen(process.env.PORT, function () {
      console.log(`express server is running on port ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })
// require route
