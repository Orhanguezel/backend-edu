import mongoose,{model} from "mongoose";

const{Schema} = mongoose;

const ScoresSchema = new Schema(
  {
    name: { type: String, required: true,index: false},
    date: { type: Date, required: true },
    score: { type: Number, required
: true },
  },
);

const Scores = model("Scores", ScoresSchema);
export default Scores;
