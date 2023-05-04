import { Router } from "express";
import {getAllProductsController, getNumPagesController, getProductController } from "../controllers"

const route = Router()

route.get("/getAllProducts", getAllProductsController)
route.get("/getAllProducts/product", getProductController)
route.get("/numOfPages", getNumPagesController)

export default route