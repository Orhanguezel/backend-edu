import { MongoClient } from "mongodb";

const uri = "mongodb://admin:14604925@localhost:27017/";
const client = new MongoClient(uri);
const databaseName = "mongoCrud";

const tasks = [
    { lernen: "JS", completed: true },
    { lernen: "Html", completed: true },
    { lernen: "React", completed: true },
    { lernen: "Typescript", completed: false }
  ];

async function run(){
    try {
        await client.connect();
        const db = client.db(databaseName);

        await db.createCollection("tasks");const result = await db.collection("tasks").insertMany(tasks);
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