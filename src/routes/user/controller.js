import {Request, Response} from "express";

export const getUsers = (req, res) => {
    res.send("ok, this has been a success")
    res.statusCode(200)
}