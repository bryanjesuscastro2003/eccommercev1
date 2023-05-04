import { Request, Response, NextFunction } from "express";
import {
  GetProductsCase,
  GetProductCase,
  GetNumPagesCase,
} from "../../../../application";
import { MongoDbPersistence } from "../../../implementations/mongodb/MongoDbPersistence";
import {
  EnterGetProductRequest,
  EnterNumPagesRequest,
  EnterGetProductsRequest,
} from "../../../implementations/in";

const mongoPersistence = new MongoDbPersistence();

export const getAllProductsController = async (req: Request, res: Response) => {
  try {
    const caseAction = new GetProductsCase(mongoPersistence);
    const { section, type, pageNumber } = req.query;
    if (![section, type, pageNumber].every(Boolean))
      throw new Error("Invalid data :/");
    const data = new EnterGetProductsRequest(section, type, pageNumber);
    console.log(data)
    return res.json(await caseAction.run(data)).status(200);
  } catch (error) {
    console.log(error)
    return res
      .json({
        ok: false,
      })
      .status(500);
  }
};

export const getProductController = async (req: Request, res: Response) => {
  try {
    const caseAction = new GetProductCase(mongoPersistence);
    const { section, type, _id } = req.query;
    if (![section, type, _id].every(Boolean))
      throw new Error("Invalid data :/");
    const data = new EnterGetProductRequest(section, type, _id);
    console.log(data)
    return res.json(await caseAction.run(data)).status(200);
  } catch (error) {
    return res
      .json({
        ok: false,
      })
      .status(500);
  }
};

export const getNumPagesController = async (req: Request, res: Response) => {
  try {
    const caseAction = new GetNumPagesCase(mongoPersistence);
    const { section, type } = req.query;
    if (![section, type].every(Boolean)) throw new Error("Invalid data :/");
    const data = new EnterNumPagesRequest(section, type);
    return res.json(await caseAction.run(data)).status(200);
  } catch (error) {
    return res
      .json({
        ok: false,
      })
      .status(500);
  }
};
