import express from "express";
import { newOroduct } from "../controllers/order.js";

const app = express.Router();

app.post("/new",newOroduct);
export default app;