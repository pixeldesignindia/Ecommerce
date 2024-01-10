import express from "express";

const app = express.Router();

import { adminOnly } from "../middlewares/auth.js";
import { getDashboardStats } from "../controllers/statistics.js";
app.get("/dashboardStats",adminOnly,getDashboardStats)
export default app;