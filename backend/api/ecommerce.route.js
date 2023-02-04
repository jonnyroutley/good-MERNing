import express from 'express'

const router = express.Router()

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.route('/').get((req, res) => {
  res.send("api hello world")
})

export default router
