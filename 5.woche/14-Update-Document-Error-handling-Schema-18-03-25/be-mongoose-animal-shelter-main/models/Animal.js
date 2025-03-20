import { model, Schema } from "mongoose";

const animalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  hearts: {
    type: Number,
    default: 0,
  },
  reserved: {
    type: Boolean,
    default: false,
  },
});

const Animal = model("Animal", animalSchema);

export default Animal;
