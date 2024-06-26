import { addCart,removeCart,getCart } from "../controllers/CartController.js";
import authMiddleware from "../middleware/auth.js";
import express from "express";

const cartRouter=express.Router();

cartRouter.post('/add',authMiddleware,addCart);

cartRouter.post('/remove',authMiddleware,removeCart);

cartRouter.post('/get',authMiddleware,getCart);

export default cartRouter;