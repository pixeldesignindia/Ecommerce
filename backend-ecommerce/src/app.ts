import express from "express";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import NodeCache from "node-cache";
export const myCache = new NodeCache()
import cors from"cors"



//importing Routes
import userRouter from "./routes/user.js"
import productRouter from "./routes/product.js"
import addressRouter from "./routes/address.js"
import orderRouter from "./routes/order.js"
import paymentRouter from "./routes/payment.js"
import statisticsRouter from "./routes/statistics.js"
const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin:  ["http://localhost:3000"]
  })
);

connectDB("mongodb+srv://manaskumar:iFVJhjYrsH7iars8@cluster0.s4pqkzd.mongodb.net/?retryWrites=true&w=majority");
const port = 4000;


app.use("/api/v1/users",userRouter)
app.use("/api/v1/product",productRouter)
app.use("/api/v1/address",addressRouter)
app.use("/api/v1/orders",orderRouter)
app.use("/api/v1/payments",paymentRouter)
app.use("/api/v1/statistics",statisticsRouter)

app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware);
app.listen(port, () => {
console.log(`express listening on port${port}`);
});