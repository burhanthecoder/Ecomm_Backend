import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  type: String,
  name: String,
  contact: String

});
const user = mongoose.model("user", userSchema);
export default user;