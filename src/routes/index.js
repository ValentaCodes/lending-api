// src/routes/index.js
import { Router } from "express";
import homeRoutes from "./homeRoutes.js";
import apiRoutes from "./api/index.js";
// import authRoutes from "./authRoutes.js";

const router = Router();

// Mount sub-routers
router.use("/", homeRoutes);
router.use("/api", apiRoutes);
// router.use("/authRoutes", authRoutes);

export default router;
