import { Router } from "express";
import {
  createUsers,
  getUser,
  getUsers,
  loginUser,
  setUsers,
} from "../controllers/customers.controllers.js";

export const customersRouter = Router();

// customersRouter.get("/getCustomers", getCustomers)

customersRouter.post("/crear-cliente", createUsers);
customersRouter.get("/cliente/:id", getUser);
customersRouter.get("/cliente/", getUsers);
customersRouter.put("/cliente/:id", setUsers);
customersRouter.post("/login", loginUser);
