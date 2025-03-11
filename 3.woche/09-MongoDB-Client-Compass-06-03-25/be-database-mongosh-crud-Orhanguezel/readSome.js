import { MongoClient } from "mongodb";

const uri = "mongodb://admin:14604925@localhost:27017/";
const client = new MongoClient(uri);
const databaseName = "mongoCrud";

async function run() {
    try {
      await client.connect();

      const db = client.db(databaseName);
      const collection = db.collection("tasks");

      const result = await collection.find({ completed: true }).toArray();
      console.log(result);
      
    } catch (error) {
      console.error("Hata:", error);
    } finally {
      await client.close();
      console.log("verbindung geschlossen");
    }
}

run();
