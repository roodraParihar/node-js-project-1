import express from "express"
import { resisterController } from "../controllers/authController.js"

// router object
const router = express.Router();

// routes
router.post("/register", resisterController);

export default router;