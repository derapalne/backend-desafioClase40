import { Router } from "express";
import { ProductosFactory } from "../factories/index.js";
import { config } from "../utils/index.js";

const routerMain = Router();
const factory = new ProductosFactory();

routerMain.get("/crearDaoProd", async (req, res) => {
    const productosDao = await factory.createDao(config.DB);
    res.status(200).json(productosDao.id);
});

routerMain.get("/prod/:id?", async (req, res) => {
    const productosDao = await factory.createDao(config.DB);
    let respuesta = null;
    const id = req.params.id;
    if (id != undefined) {
        // console.log("hooolaaaa");
        respuesta = await productosDao.getById(id);
    } else {
        respuesta = await productosDao.getAll();
    }
    console.log(respuesta, req.params.id);
    res.status(200).json(respuesta);
});

routerMain.post("/prod", async (req, res) => {
    const prod = req.body.prod;
    const productosDao = await factory.createDao(config.DB);
    const respuesta = await productosDao.save(prod);
    console.log(respuesta);
    res.status(200).json(respuesta);
});

routerMain.put("/prod/:id", async (req, res) => {
    const prod = req.body.prod;
    const id = req.params.id;
    const productosDao = await factory.createDao(config.DB);
    const respuesta = await productosDao.updateById(id, prod);
    res.status(200).json(respuesta);
});

routerMain.delete("/prod/:id", async (req, res) => {
    const id = req.params.id;
    const productosDao = await factory.createDao(config.DB);
    const respuesta = await productosDao.deleteById(id);
    res.status(200).json(respuesta);
});

export default routerMain;
