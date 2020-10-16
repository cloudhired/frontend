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
router.post('/user/:id', jsonParser, function (req, res) {
  console.dir(req.body)
  res.json({"hi":"you are n"})
})

export default router