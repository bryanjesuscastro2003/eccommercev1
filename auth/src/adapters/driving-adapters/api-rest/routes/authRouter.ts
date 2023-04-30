import { Router } from "express";
import {loginController, logupController, validateTokenController} from "../controllers"

const route = Router()

route.post("/login", loginController)
route.post("/logup", logupController)
route.post("/validateToken", validateTokenController)


export default route