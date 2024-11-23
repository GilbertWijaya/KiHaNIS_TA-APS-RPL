import express from "express";
import {login,me ,logout} from "../controllers/Auth.js";

const router = express.Router();

router.get("/me",me);
router.post("/admin",login);
router.delete("/admin/:id",logout);

export default router;

