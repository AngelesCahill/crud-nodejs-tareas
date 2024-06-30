import { Router } from "express";
import { tareaController } from "../controllers/tareaController.js";

const router = Router();

//localhost:4000/api/tareas
router.get("/", tareaController.getAll);
router.post("/", tareaController.createTarea);


export default router;