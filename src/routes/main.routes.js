import { Router } from "express";
import { ProductosFactory } from "../factories/index.js";
import {config} from "../utils/index.js"

const routerMain = Router();

routerMain.get("/", (req, res) => {
    const factory = new ProductosFactory();
    const productosDao = factory.createDao(config.DB)
    res.status(200).json(productosDao.id);
})

export default routerMain;
