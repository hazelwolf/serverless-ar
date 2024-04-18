const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

const connection_string = 'connection-string'
const client = new MongoClient(connection_string)

module.exports = async function (context, req) {
 
  await client.connect();
  const database = client.db("dbName")
  const collection = database.collection("collection")
  
  let anchor = await collection.findOne({ anchorID: req.body.anchorId })
  
  if (!anchor){
      return context.res = {
          status:400,
          body: "Anchor not found"
      }
  }
 
   return (context.res = {
        // status: 200, /* Defaults to 200 */
        body: anchor
    });
};