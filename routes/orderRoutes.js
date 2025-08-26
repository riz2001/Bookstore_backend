import express from "express";
import { placeOrder, getUserOrders, getAllOrders } from "../controllers/orderController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, placeOrder);
router.get("/my-orders", protect, getUserOrders);
router.get("/all", protect, adminOnly, getAllOrders);

export default router;
