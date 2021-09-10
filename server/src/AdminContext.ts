import { Request, Response } from "express";

export interface AdminContext {
  req: Request;
  res: Response;
  payload?: JSON;
}
