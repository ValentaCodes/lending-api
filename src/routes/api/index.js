import {Router} from "express";

const router = Router();

import userRoute from "./userRoutes.js"

router.use("/user", userRoute);

export default router;