import { allOrders, changeStatus, placeOrder, userOrders, verifyOrder } from "../controllers/OrderController.js";
import authMiddleware from "../middleware/auth.js";
import express from "express";

const OrderRouter=express.Router();

OrderRouter.post('/get',authMiddleware,placeOrder);
OrderRouter.post('/verify',verifyOrder)
OrderRouter.post('/user',authMiddleware,userOrders);
OrderRouter.get('/all',allOrders);
OrderRouter.post('/status',changeStatus);
export default OrderRouter;