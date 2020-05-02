import { Router } from "express";
import routes from "./routes";

const router = Router();

// This is version 1 of our GMS App
router.use("/v1", routes);

export default router;
