import { Router } from "express";
import productRouter from "./productRouter"

const route = Router()

route.use("/items", productRouter)

export default route
