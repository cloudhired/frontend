import express from 'express'
import { MongoClient } from "mongodb"
import UsersDAO from "./dao/userDAO"
const app = express()

// Require API routes
import users from './routes/users'
import user from './routes/user'

// Import API Routes
app.use(users)
app.use(user)

export default app

MongoClient.connect(
  process.env.MONGO_CONN_STR,
  { useNewUrlParser: true, poolSize: 50, wtimeout: 2500, useUnifiedTopology: true },
)
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    await UsersDAO.injectDB(client)
    if (require.main === module) {
      const port = process.env.PORT || 8081
      app.listen(port, () => {
        console.log(`API server listening on port ${port}`)
      })
    }
  })