import mongoose, { Schema } from "mongoose";
// comment
const userSchema = new Schema(
  {
   
    email: {
      type: String,
      unique: true,
      required: true,
    }   
  },
  {
    timestamps: true,
  }
);

//the statement below says that
const User = mongoose.model("user", userSchema);
export default User;
// export const User = mongoose.model("userSignup", signupSchema);
