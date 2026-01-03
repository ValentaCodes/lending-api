import {Router} from "express";

const router = Router();

import userRoute from "./userRoutes.js"

router.use("/user", userRoute);

router.get("/", (res, req) => {
    res.send("api page")
})


export default router;