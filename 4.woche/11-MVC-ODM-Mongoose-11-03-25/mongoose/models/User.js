import mongoose,{model} from "mongoose";

const{Schema} = mongoose;

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
);

const User = model("User", UserSchema);
export default User;
