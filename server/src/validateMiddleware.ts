import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export function validateSchema(schema: z.Schema, parseQuery?: boolean) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (parseQuery) req.query = schema.parse(req.query);
      else req.body = schema.parse(req.body);
      next();
    } catch (error: any) {
      res.status(400).json({ error: error.errors });
    }
  };
}
