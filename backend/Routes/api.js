const express = require('express')
const router = express.Router()
const User = require('../model/userSchema')
const Story = require('../model/storySchema')

router.get('/users', async function (req, res) {
  let documents = await User.find({})
  res.send(documents)
})

router.post('/users', async function (req, res) {
  console.log('gUsers', req.body)
  let newUser = new User(req.body)
  await newUser.save()
  res.end()
})

// router.delete('/stories', async function (req, res) {
//   let id = req.body
//   console.log(id)
//   await Transaction.findByIdAndDelete(id.id)
//   res.end()
// })

// router.delete('/story', async function (req, res) {
//   let id = req.body
//   console.log(id)
//   await Transaction.findByIdAndDelete(id.id)
//   res.end()
// })

module.exports = router
