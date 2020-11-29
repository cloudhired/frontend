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

router.get('/email/:id', async function (req, res, next) {
  console.log(req.params.id)
  const userInfo = await UsersDAO.getUserByEmail(req.params.id)
  res.send({ "data": userInfo })
})

// change user information 
router.post('/user/:id', jsonParser, async function (req, res) {
  console.dir(req.body)
  const query = await UsersDAO.updateUserInfo(req.params.id, req.body.email, req.body.setInfo)
  console.log(query)
  res.json(query)
})

export default router