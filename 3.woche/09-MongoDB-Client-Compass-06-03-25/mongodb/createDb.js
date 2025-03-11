import { MongoClient } from "mongodb";

const uri = "mongodb://admin:14604925@localhost:27017/";
const client = new MongoClient(uri);
const databaseName = "moviesData";

const x = [
  { from: "user1", name: "Titanic", score: 95 },
  { from: "user2", name: "Cats", score: 1 },
  { from: "user3", name: "Inception", score: 85 }
];

async function run() {
  try {
    await client.connect();
    const db = client.db(databaseName);

    await db.createCollection("reviews");

    // Varolan bir koleksiyona veri ekleyelim:
    const result = await db.collection("reviews").insertMany(x);
    console.log("Başarıyla eklendi:", result.insertedCount);

  } catch (error) {
    console.error("Hata:", error);
  } finally {
    await client.close();
    console.log("Bağlantı kapatıldı");
  }
}

run();

