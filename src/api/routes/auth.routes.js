import { Router } from "express";
import { loginUser } from "../controllers/auth.controller.js";

const router = Router();

router.post("/", loginUser); // Ruta para el login de usuarios

export default router;