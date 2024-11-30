import { Router } from "express";
import {
  createUsers,
  getUser,
  getUsers,
  loginUser,
  setUsers,
} from "../controllers/user.controllers.js";

export const userRouter = Router();

// customersRouter.get("/getCustomers", getCustomers)

userRouter.post("/crear-cliente", createUsers);
userRouter.get("/cliente/:id", getUser);
userRouter.get("/cliente/", getUsers);
userRouter.put("/cliente/:id", setUsers);
userRouter.post("/login", loginUser);
