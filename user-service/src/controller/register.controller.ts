import { Request, Response } from "express";
import { User } from "../interfaces/user";
import { createUser } from "../service/serviceCreate";
import { generateToken, generateRefreshToken } from "../utils/jwt.handle";

//register controller
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, firstname, lastname, email, password, avatar } = req.body;
  
    const newUser: User = {
      username,
      firstname,
      lastname,
      email,
      password,
      avatar
    };

    const user = await createUser(newUser);

    const tokenUser = generateToken(user._id);
    generateRefreshToken(user._id, res)
  
    await user.save()

    return res.status(201).send({ message: "User registered successfully", tokenUser });
  } catch (err: any) {
    return res.status(409).send("Error at register " + err);
  }
};