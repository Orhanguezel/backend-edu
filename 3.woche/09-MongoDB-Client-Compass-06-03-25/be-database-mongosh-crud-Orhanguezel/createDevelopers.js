import { MongoClient } from "mongodb";

const uri = "mongodb://admin:14604925@localhost:27017/";
const client = new MongoClient(uri);
const databaseName = "developers";

const profile = [
    {
        name: 'Justiina Puupää',
        job: 'Web Developer',
        address: {
          country : 'Spain',
          code: 1111
        }
      }
        ];

async function run(){
    try {
        await client.connect();
        const db = client.db(databaseName);

        await db.createCollection("profiles");
        const result = await db.collection("tasks").insertOne(profile);
    }

    catch (error) {
        console.error("Error:", error);
    }

    finally {
        await client.close();
        console.log("verbindung geschlossen");
    }
}

run();