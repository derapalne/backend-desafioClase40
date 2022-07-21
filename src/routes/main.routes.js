import { Router } from "express";
import { getProdId, postProd, putProdId, deleteProdId } from "../controllers/index.js"

const routerMain = Router();

routerMain.get("/prod/:id?", getProdId);

routerMain.post("/prod", postProd);

routerMain.put("/prod/:id", putProdId);

routerMain.delete("/prod/:id", deleteProdId);

export default routerMain;
