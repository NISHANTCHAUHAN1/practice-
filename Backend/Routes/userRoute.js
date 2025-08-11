import express from "express";
import { create, deleteUser, getAll, getOne, login, registerUser, update } from "../Controller/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login)
router.post("/create", create);
router.get("/getAll", getAll);
router.get("/getOne/:id", getOne);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteUser);

export default router;