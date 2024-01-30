import express from "express";
import { allOrders, deleteOrder, myOrders, newOroduct, processOrder, singleOrder } from "../controllers/order.js";
import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

app.post("/new",newOroduct);

app.get("/my/:id", myOrders);

app.get("/all", adminOnly, allOrders);

app
  .route("/:id")
  .get(singleOrder)
  .put(adminOnly, processOrder)
  .delete(adminOnly, deleteOrder);

export default app;