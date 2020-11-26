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
  const pros = await db.getCollection('cloudhired', 'users');
  // let result = await pros.find({}).project({ name: 1, location:1, yoe: 1}).toArray()
  let result = await pros.aggregate([
    {
      '$project': {
        'username': 1,
        'fullname': 1, 
        'job_title': 1,
        'current_loc': 1,
        'company': 1,
        'email': 1,
        'number_certs': {
          '$cond': {
            'if': {
              '$isArray': '$certs'
            }, 
            'then': {
              '$size': '$certs'
            }, 
            'else': 'NA'
          }
        }
      }
   }
  ]).toArray()
  console.log(result)
  res.send({ "results": result})
})

export default router