import connect from "./db.js";
import Score from "./models.js";

connect();

const read = async () => {
  try {
    const targetScores = [1, 2, 1000, 999, 500];

    targetScores.forEach(async (score) => {
      const result = await Score.findOne({ score });

      if (result) {
        console.log(` Player ${result.name} has scored ${result.score}`);
      } else {
        console.log(` No player has scored ${score}`);
      }
    });
  } catch (error) {
    console.error("Error reading scores:", error.message);
  }
};
read();

