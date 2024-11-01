import express from "express";
import { handleUserLogin, handleUserSignUp } from "../controller/user.js";

const userRouter = express.Router();

userRouter.post("/", handleUserSignUp);
userRouter.post("/login", handleUserLogin);


export default userRouter;