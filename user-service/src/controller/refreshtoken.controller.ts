import { Request, Response } from "express";
import { generateToken } from "../utils/jwt.handle";

export const refreshToken = (req: Request, res: Response) => {
    try {
        const tokenUser = generateToken(req.params.id);
        return res.json(tokenUser)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error of server! "})
    }
};