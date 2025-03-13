import mongoose,{model} from "mongoose";


const ScoreSchema = new mongoose.Schema(
  {
    name: { type: String, required: true,index: false},
    date: { type: Date, required: true },
    score: { type: Number, required
: true },
  },
);

const Score = model("Score", ScoreSchema);
export default Score;
