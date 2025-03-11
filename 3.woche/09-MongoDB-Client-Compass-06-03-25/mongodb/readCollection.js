import {MongoClient} from "mongodb";

const connectionUri = "mongodb://admin:14604925@localhost:27017/";
const client = new MongoClient(connectionUri);
const databaseName = "moviesData";

async function readCollection() {
  try {
    await client.connect();
    const db = client.db(databaseName);

    const collection = db.collection("reviews");
    const result = await collection.find({}).toArray();
    console.log(result);

  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

readCollection();