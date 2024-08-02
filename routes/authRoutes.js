import express from "express"
import { loginController, resisterController } from "../controllers/authController.js"

// router object
const router = express.Router();

// routes
router.post("/register", resisterController);


// login
router.post('/login',loginController);

export default router;