import { Router } from "express";
import productRouter from "./productRouter"

const route = Router()

route.use("/product", productRouter)

export default route
