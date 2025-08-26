import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  stock: Number,
  genre: String,
  coverImage: String
}, { timestamps: true });

export default mongoose.model("Book", bookSchema);
