import { Router } from 'express'
import bodyParser from "body-parser"
const router = Router()
import UsersDAO from '../dao/userDAO' 

var jsonParser = bodyParser.json()

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
router.post('/user/:id', jsonParser, async function (req, res) {
  console.dir(req.body)
  // TODO: validate user has right to modify
  UsersDAO.updateUserInfo(req.params.id, req.body)
  res.json({sucess: true})
})

export default router