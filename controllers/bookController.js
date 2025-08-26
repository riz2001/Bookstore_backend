import Book from "../models/Book.js";

export const addBook = async (req, res) => {
  try {
    const book = await Book.create({ ...req.body, coverImage: req.file?.filename });
    res.json(book);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

export const getBooks = async (req, res) => {
  const { genre, search } = req.query;
  let query = {};
  if (genre) query.genre = genre;
  if (search) query.title = { $regex: search, $options: "i" };
  res.json(await Book.find(query));
};

export const updateBook = async (req, res) => {
  res.json(await Book.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

export const deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ msg: "Book deleted" });
};
