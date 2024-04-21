import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    employmentType: {
      type: String,
      required: true,
    },
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
