import express from "express";
import multer from "multer";
import { addBook, getBooks, updateBook, deleteBook } from "../controllers/bookController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/", getBooks);
router.post("/", protect, adminOnly, upload.single("cover"), addBook);
router.put("/:id", protect, adminOnly, updateBook);
router.delete("/:id", protect, adminOnly, deleteBook);

export default router;
