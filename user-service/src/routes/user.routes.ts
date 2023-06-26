import { Router } from "express";
import { registerUser } from "../controller/register.controller";
import { loginUser } from "../controller/login.controller";
import { getUserById, getUsers } from "../controller/find.controller";
import { updateUserById } from "../controller/update.controller";
import { removeUser } from "../controller/delete.controller";
import { authUserValidator } from "../validations/register.validations";
import { loginValidator } from "../validations/login.validations";
import { verifyToken } from "../middleware/token.validations";

const userRoutes = Router();

userRoutes.post("/register", authUserValidator, registerUser);

userRoutes.post("/login", loginValidator, loginUser);

userRoutes.get("/", /*verifyToken,*/ getUsers);

userRoutes.get(":id", verifyToken, getUserById);

userRoutes.put("/:id", verifyToken, updateUserById);

userRoutes.delete("/:id", /*verifyToken,*/ removeUser);

export default userRoutes;