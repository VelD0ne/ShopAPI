import express from "express";
import { testRouter } from "./test";
import { productRouter } from "./product";
import { cartRouter } from "./cart";
var router = express.Router();

router.use(testRouter);
router.use(productRouter);
router.use(cartRouter);

export { router };