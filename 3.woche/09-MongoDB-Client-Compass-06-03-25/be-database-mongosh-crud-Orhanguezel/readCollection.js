import { MongoClient } from "mongodb";

const uri = "mongodb://admin:14604925@localhost:27017/";
const client = new MongoClient(uri);
const databaseName = "mongoCrud";

async function run() {
    try {
      const db = client.db(databaseName);
      const result = await db
        .collection("tasks")
        .find().toArray();
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      await client.close();
    }
  }
  run();
