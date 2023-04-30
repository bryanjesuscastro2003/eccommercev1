import { Router } from "express";
import {getAllProductsController, getNumPagesController, getProductController } from "../controllers"

const route = Router()

route.get("/getAllProducts/:section/:type/:pageNumber", getAllProductsController)
route.get("/getProduct/:section/product/:type/:_id", getProductController)
route.get("/numOfPages/:section/:type", getNumPagesController)

export default route