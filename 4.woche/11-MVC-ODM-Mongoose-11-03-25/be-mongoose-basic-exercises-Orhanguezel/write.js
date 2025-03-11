import connect from "./db.js";
import Scores from "./models.js";

connect();

const randomName = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return (
    letters[Math.floor(Math.random() * letters.length)] +
    letters[Math.floor(Math.random() * letters.length)] +
    letters[Math.floor(Math.random() * letters.length)]
  );
};

const randomDate = () => {
  const now = Date.now();
  const randomOffset = Math.floor(Math.random() * 10000000000);
  return now - randomOffset; 
};

const write = async () => {
  try {
    for (let i = 0; i < 900; i++) {
      const newScore = new Scores({
        name: randomName(), 
        date: randomDate(), 
        score: Math.floor(Math.random() * 1000) + 1, 
      });

      await newScore.save(); 
      console.log(`✅ Score ${i + 1}/900 saved:`, newScore);
    }

    console.log("🎉 All scores successfully saved!");
  } catch (error) {
    console.error("❌ Error saving scores:", error.message);
  }
};

write();
