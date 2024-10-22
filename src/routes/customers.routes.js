import { Router } from "express";
import { createCustomer, getCustomer, setCustomer } from "../controllers/customers.controllers.js";

export const customersRouter = Router()

// customersRouter.get("/getCustomers", getCustomers)

customersRouter.post("/crear-cliente", createCustomer)
customersRouter.get("/cliente/:id", getCustomer)
customersRouter.put("/cliente/:id", setCustomer)