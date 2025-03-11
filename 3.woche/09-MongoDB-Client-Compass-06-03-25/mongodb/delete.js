import { MongoClient } from "mongodb";

const uri = "mongodb://admin:14604925@localhost:27017/";
const client = new MongoClient(uri);
const databaseName = "moviesData";

async function deleteDocument() {
  try {
    await client.connect();
    const db = client.db(databaseName);
    const collection = db.collection("reviews");

    const filter = { name: "Cats" };

    const result = await collection.deleteOne(filter);
    console.log(`${result.deletedCount} belge başarıyla silindi.`);
    
  } catch (error) {
    console.error("Hata:", error);
  } finally {
    await client.close();
    console.log("Bağlantı kapatıldı.");
  }
}

deleteDocument();
