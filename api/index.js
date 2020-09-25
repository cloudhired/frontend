const express = require('express')
const db = require('./db')

// Create express instance
const app = express()

// Require API routes
const users = require('./routes/users').default
// const test = require('./routes/test')

// Import API Routes
app.use(users)
// app.use(test)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}