import { Router } from "express";
import user from './user.route'

const router = Router();

// Connect your routes down here
router.use("/auth", user);

export default router;
