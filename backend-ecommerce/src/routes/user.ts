import express from "express";


const app = express.Router();

import {
    deleteUser,
    getAllUsers,
  getUser,
  newUser,
} from "../controllers/user.js";
import { adminOnly } from "../middlewares/auth.js";


app.post("/new",newUser)

app.get("/all",adminOnly,getAllUsers)

app.route("/:id").get(getUser).delete(adminOnly,deleteUser)

export default app;