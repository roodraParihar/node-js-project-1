import testPostController from "../controllers/testController.js";
import express from "express";


// router object
const router = express.Router();


// routes
router.post("/test-post", testPostController)


// export 
export default router;