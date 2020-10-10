import { MongoClient } from "mongodb"
const client = new MongoClient(process.env.MONGO_CONN_STR, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect()

module.exports = {
  getDB: function(dbName) {
    return client.db(dbName)
  },

  getCollection: function (dbName, collectionName) {
    return client.db(dbName).collection(collectionName)
  }
}

