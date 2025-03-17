import { model, Schema } from "mongoose";

// 1
//   fullName: String,
//   age: Number,
//   className: String,
//   hobbies: [String],
//   address: {
//     city: String,
//     postalCode: String,
//   },

const adressSchema = new Schema(
  {
    city: {
      type: String,
      minlength: 3,
    },
    postalCode: {
      type: String,
      minlength: 5,
    },
  },
  { _id: false }
);

const studentSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      minlength: 4,
    },
    age: {
      type: Number,
      min: 18,
    },
    className: String,
    hobbies: {
      type: [String],
      enum: ["Tennis", "Swimming"],
    },
    adresse: adressSchema,
    // createdAt: {
    //   type: Date,
    //   default: Date.now(),
    // },
  },
  { timestamps: true }
);

export const Student = model("Student", studentSchema);
