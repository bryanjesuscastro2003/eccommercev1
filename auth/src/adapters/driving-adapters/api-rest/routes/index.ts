import { Request, Response, Router, NextFunction } from "express";
import authRouter from "./authRouter"

const route = Router()

route.use("/auth", authRouter)

export default route