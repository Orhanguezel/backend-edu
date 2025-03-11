import { MongoClient } from "mongodb";

const uri = "mongodb://admin:14604925@localhost:27017/";
const client = new MongoClient(uri);
const databaseName = "mongoCrud";

const task = [
            { lernen: "JS", completed: true }
        ];

async function run(){
    try {
        await client.connect();
        const db = client.db(databaseName);

        await db.createCollection("tasks");const result = await db.collection("tasks").insertMany(task);
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