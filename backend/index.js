// connect to database and start the server
import * as dotenv from 'dotenv'
import app from './server.js'
import mongodb from 'mongodb'

dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
  process.env.ECOMMERCE_DB_URI,
  {
      maxPoolSize: 50,      // how many people can connect at a time
      wtimeoutMS: 2500,    // in ms, how long to wait before request times out
      useNewUrlParser: true
  }
)
.catch(err => {
  console.error(err.stack)
  process.exit(1)
})
.then(async client => {
  app.listen(port, () =>{
      console.log(`listening on port ${port}`)
  })
})