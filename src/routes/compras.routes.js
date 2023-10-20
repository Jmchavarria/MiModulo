import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { createCompra, deleteCompra, getCompras, updateCompra } from "../controllers/compras.controller.js";
import { updateCliente } from "../controllers/clientes.controller.js";

const router = Router()

router.get("/compras", authRequired, getCompras) 
router.post("/compras", authRequired, createCompra) 
router.delete("/compras/:id", authRequired, deleteCompra ) 
router.put("/compras/:id", authRequired, updateCliente) 

export default router