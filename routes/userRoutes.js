import express from "express";
import orderModel from "../models/orderModel.js";

const orderRouter = express.Router();

orderRouter.post("/new", async (req, res) => {
  try {
    const { email, orderValue } = req.body;
    const result = await orderModel.create({ email, orderValue });
    return res.status(201).json(result);
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default orderRouter;
