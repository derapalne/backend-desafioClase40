import { Router } from "express";
const routerMain = Router();

routerMain.get("/", (req, res) => {
    res.status(200).json({mensaje: "hola JA"});
})

export default routerMain;
