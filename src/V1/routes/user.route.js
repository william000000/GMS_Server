import { Router } from "express";
import userController from "../controllers/user.controller.js";

const route = Router();

// Add APIs regarding auth

route.post("/signin", userController.signin);

export default route;
