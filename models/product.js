import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  email: String,
  password: String,
  type: String,
  name: String,

});
const product = mongoose.model("product", productSchema);
export default product;