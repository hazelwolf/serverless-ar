const { MongoClient } = require("mongodb")

const connection_string = 'connection-string'
const client = new MongoClient(connection_string)


module.exports = async function (context, req) {

    await client.connect();
    const database = client.db("dbName")
    const collection = database.collection("collection")
   
    let achorList = await collection.find({areaID : req.query.areaId}).toArray();
 
   return (context.res = {
        // status: 200, /* Defaults to 200 */
        body: achorList
    });
}