import {Router} from "express";

import {getAllUsers, getUser} from "../../controllers/userController.js"

const router = Router();
// GET all users
router.get("/", getAllUsers)

router.get("/:id", getUser)

export default router;