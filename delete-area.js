const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

const connection_string = 'connection-string'
const client = new MongoClient(connection_string)

module.exports = async function (context, req) {
 
  await client.connect();
  const database = client.db("dbName")
  const collection = database.collection("collection2")
  
   let update = await collection.deleteMany({areaID : req.query.areaId})
  
  if (!update){
      return context.res = {
          status:400,
          body: ""
      }
  }
 
   return (context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Deleted area " + req.query.areaId
    });
};