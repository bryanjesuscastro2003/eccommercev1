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
    console.log(req.params)
    const { section, type, pageNumber } = req.params;
    if (![section, type, pageNumber].every(Boolean))
      throw new Error("Invalid data :/");
    const data = new EnterGetProductsRequest(section, type, parseInt(pageNumber));
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
    const { section, type, _id } = req.params;
    if (![section, type, _id].every(Boolean))
      throw new Error("Invalid data :/");
    const data = new EnterGetProductRequest(section, type, _id);
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
    const { section, type } = req.params;
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
