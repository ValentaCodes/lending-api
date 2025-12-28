const users = require("express").Router();
import {getUsers} from "./controller"

users.get("/users", getUsers)

module.exports = users;