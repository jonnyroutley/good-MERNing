import express from 'express'
import cors from 'cors'
import ecommerce from './api/ecommerce.route.js'
// const ecommerce = require('.api/ecommerce.route.js')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send("hello world")
})

app.use('/api/ecommerce', ecommerce)
app.use("*", (req, res) => res.status(404).json({error: "Not Found !"})) // wildcard - all other routes

export default app
