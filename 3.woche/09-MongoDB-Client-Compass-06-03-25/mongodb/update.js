import { MongoClient } from "mongodb";

const uri = "mongodb://admin:14604925@localhost:27017/";
const client = new MongoClient(uri);
const databaseName = "moviesData";

async function updateReview() {
  try {
    await client.connect();
    const db = client.db(databaseName);

    const collection = db.collection("reviews");

    // Bir dökümanın puanını güncelleyelim
    const filter = { name: "Titanic" };
    const update = { $set: { score: 98 } };

    const result = await collection.updateOne(filter, update);
    console.log(`${result.modifiedCount} belge başarıyla güncellendi.`);

  } catch (error) {
    console.error("Hata:", error);
  } finally {
    await client.close();
    console.log("Bağlantı kapatıldı.");
  }
}

updateReview();
