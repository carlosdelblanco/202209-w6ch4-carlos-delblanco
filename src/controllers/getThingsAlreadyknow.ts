import type { Request, Response } from "express";
import thingsAlredyKnow from "../data/thingsAlreadyknow.js";

const getThingsAlreadyknow = (req: Request, res: Response) => {
  res.status(200).json({ things: thingsAlredyKnow });
};

export default getThingsAlreadyknow;
