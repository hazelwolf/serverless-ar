const { MongoClient } = require("mongodb")
const { v4:uuidv4 } = require("uuid")

const connection_string = 'connection-string'
const client = new MongoClient(connection_string)

let anchor = [
    {
        _id : uuidv4(),
        anchorID: "anchor-id",
        assetID: 'asset-id',
    }
]

let areas = [{
    _id : uuidv4(),
    areaID : "area-ID"
}]


module.exports = async function (context, req) {

    await client.connect();
    const database = client.db("dbName")
    let collection = database.collection("collection")
    
    await collection.deleteMany({})
    await collection.insertMany(anchor);

    collection = database.collection("collection2")
    await collection.deleteMany({})
    await collection.insertMany(areas); 
    
        context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Init is done"
    };
}