// src/routes/home.js
import { Router } from "express";
import { getHomepage, getHealth } from "../controllers/homeController.js";

const router = Router();

router.get("/", getHomepage);
router.get("/health", getHealth);

export default router;
