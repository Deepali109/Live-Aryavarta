import express from "express";
import {
  getDestinationByCategory,
  getDestinationById,
} from "../controllers/CategoryBasedController.js";

const router = express.Router();
router.get("/category/:category", getDestinationByCategory);
// Get full details of a destination by ID
router.get("/destination/:category/:id", getDestinationById);

export default router;
