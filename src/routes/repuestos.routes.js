import { Router } from "express";

import { authRequired } from "../middlewares/validateToken.js";


import { createRepuestos, deleteRepuesto, getRepuestos, updateRepuesto } from "../controllers/respuestos.controller.js";

const router = Router()

router.get("/repuestos", authRequired, getRepuestos) 
router.post("/repuestos", authRequired, createRepuestos) 
router.delete("/repuestos/:id", authRequired, deleteRepuesto ) 
router.put("/repuestos/:id", authRequired, updateRepuesto) 

export default router