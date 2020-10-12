import { Router } from 'express'
const router = Router()
import UsersDAO from '../dao/userDAO' 
const db = require('../db')

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/user/:id', async function (req, res, next) {
  console.log(req.params.id)
  const userInfo = await UsersDAO.getUser(req.params.id)
  // testing port
  userInfo['port'] = process.env.PORT || "nothing"
  console.dir(userInfo)
  // const pros = await db.getCollection('professionals', 'professional_profiles');
  res.send(userInfo)
})

export default router