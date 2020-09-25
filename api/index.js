import express from 'express'
// Create express instance
const app = express()

// Require API routes
import users from './routes/users'
// const test = require('./routes/test')

// Import API Routes
app.use(users)
// app.use(test)

// Export express app
export default app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}