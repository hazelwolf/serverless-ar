const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

const connection_string = 'connection-string'
const client = new MongoClient(connection_string)

module.exports = async function (context, req) {
 
  await client.connect();
  const database = client.db("dbName")
  const collection = database.collection("collection")
  console.log(req)
  let area = {
       _id : uuidv4(),
        areaID : req.query.areaId
  }
  
   await collection.insertOne(area);
    
        context.res = {
        // status: 200, /* Defaults to 200 */
        body: area
    };
};