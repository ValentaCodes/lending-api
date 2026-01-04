import {Router} from "express";

const router = Router();

import userRoute from "./userRoutes.js"

//mount userRoutes
router.use("/user", userRoute);

export default router;