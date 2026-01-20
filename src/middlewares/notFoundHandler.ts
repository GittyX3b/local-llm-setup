import type { RequestHandler } from "express";

export const notFoundHandler: RequestHandler = (_req, _res, next) => {
  next(new Error("Not Found", { cause: { status: 404 } }));
};
