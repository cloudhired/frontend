import { Router } from 'express'
const router = Router()
const db = require('../db')

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/users', async function (req, res, next) {
  const pros = await db.getCollection('professionals', 'professional_profiles');
  res.send({ "results": await pros.find({}).toArray()})
})

export default router