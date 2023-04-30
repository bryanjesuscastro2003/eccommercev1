import { Request, Response, NextFunction } from "express";
import {
  LoginUseCase,
  LogupUseCase,
  ValidateTokenUseCase,
} from "../../../../application";
import { AuthService } from "../../../implementations/services/AuthService";
import { MongoDbPersistence } from "../../../implementations/mongodb/MongoDbPersistence";
import {
  LoginRequest,
  LogUpRequest,
  validateTokenRequest,
} from "../../../implementations/in";

const mongoPersistence = new MongoDbPersistence();
const authService = new AuthService(mongoPersistence);

export const loginController = async (req: Request, res: Response) => {
  try {
    const caseAction = new LoginUseCase(mongoPersistence, authService);
    const data = new LoginRequest(req.body.username, req.body.password);
    return res.json(await caseAction.run(data)).status(201);
  } catch (e) {
    return res
      .json({
        ok: false,
      })
      .status(500);
  }
};

export const logupController = async (req: Request, res: Response) => {
  try {
    const { name, username, email, password } = req.body;
    if (![name, username, email, password].every(Boolean))
      throw new Error("Incomplete data");
    const caseAction = new LogupUseCase(mongoPersistence, authService);
    const data = new LogUpRequest(name, username, email, password);
    return res.json(await caseAction.run(data)).status(201);
  } catch (e) {
    return res
      .json({
        ok: false,
      })
      .status(500);
  }
};

export const validateTokenController = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    if (!token) throw new Error("Invalid token");
    const caseAction = new ValidateTokenUseCase(mongoPersistence, authService);
    const data = new validateTokenRequest(token);
    return res.json(await caseAction.run(data)).status(200);
  } catch (e) {
    return res
      .json({
        ok: false,
        message: e instanceof Error && e.message
      })
      .status(400);
  }
};
