import { Request } from "express";
import { TryCatch } from "../middlewares/error.js";
import { NewOrderRequestBody } from "../types/types.js";
import ErrorHandler from "../utils/utility-class.js";
import { Order } from "../models/order.js";
import { invalidateCache, reduceStock } from "../utils/features.js";

export const newOroduct = TryCatch(
  async (req: Request<{}, {}, NewOrderRequestBody>, res, next) => {
   const {
      shippingInfo,
      orderItems,
      user,
      subtotal,
      tax,
      shippingCharges,
      discount,
      total,
    } = req.body;

    if (!shippingInfo || !orderItems || !user || !subtotal || !tax || !total)
      return next(new ErrorHandler("Please Enter All Fields", 400));

    const order = await Order.create({
      shippingInfo,
      orderItems,
      user,
      subtotal,
      tax,
      shippingCharges,
      discount,
      total,
    });
     await reduceStock(orderItems);

    invalidateCache({
      product: true,
      order: true,
      admin: true,
      userId: user,
      productId: order.orderItems.map((i) => String(i.productId)),
    });

    return res.status(201).json({
      success: true,
      message: "Product Created Successfully",
    });
  }
);