import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  first_name: String,
  email: String,
});

export default model("User", userSchema);