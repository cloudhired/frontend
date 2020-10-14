import { Router } from 'express'
const router = Router()
import UsersDAO from '../dao/userDAO' 

// get user information
router.get('/user/:id', async function (req, res, next) {
  console.log(req.params.id)
  const userInfo = await UsersDAO.getUser(req.params.id)
  // testing port
  // console.dir(userInfo)
  // const pros = await db.getCollection('professionals', 'professional_profiles');
  res.send(userInfo)
})

// change user information 
router.post('/user/:id', async function (req, res, next) {
  console.log("hi+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
})

export default router