import express from "express";

const app = express.Router();

import { adminOnly } from "../middlewares/auth.js";
import { getDashboardStats, getPieCharts } from "../controllers/statistics.js";
app.get("/dashboardStats",adminOnly,getDashboardStats)

app.get("/pieChart",adminOnly,getPieCharts)
export default app;