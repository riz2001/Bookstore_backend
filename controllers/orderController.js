import Order from "../models/Order.js";

export const placeOrder = async (req, res) => {
  try {
    const order = await Order.create({
      user: req.user._id,
      items: req.body.items,
      totalPrice: req.body.totalPrice
    });
    res.json(order);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

export const getUserOrders = async (req, res) => {
  res.json(await Order.find({ user: req.user._id }).populate("items.book"));
};

export const getAllOrders = async (req, res) => {
  res.json(await Order.find().populate("user").populate("items.book"));
};
