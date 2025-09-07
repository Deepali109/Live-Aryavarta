import express from "express";
import { getDestinationByCategory } from "../controllers/CategoryBasedController.js";

const router = express.Router();
router.get("/category/:category", getDestinationByCategory);

export default router;
