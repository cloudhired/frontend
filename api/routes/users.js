import { Router } from 'express'


// connect to MongoDB
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ch-user:FhDne1WoX3qI2wIm@cloudhired.c58f7.gcp.mongodb.net/cloudhired?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function getCollection() {
  await client.connect()
  return client.db("professionals").collection("professional_profiles");
}

const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/users', async function (req, res, next) {
  const pros = await getCollection();
  res.send(await pros.find({}).toArray())
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

export default router