import express , { Router } from "express"
import loan from "./loanRoutes"
import user from "./user"

const v1 = express.Router();

v1.use("/user", user)
v1.use("/loans", loan)

module.exports = v1