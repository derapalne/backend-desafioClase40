import ProductosService from "../services/index.js";
const service = ProductosService;

const getProdId = async (req, res) => {
    let respuesta = null;
    const id = req.params.id;
    if (id != undefined) {
        // console.log("hooolaaaa");
        respuesta = await service.getById(id);
    } else {
        respuesta = await service.getAll();
    }
    console.log(respuesta, req.params.id);
    res.status(200).json(respuesta);
};
const postProd = async (req, res) => {
    const prod = req.body.prod;
    const respuesta = await service.save(prod);
    console.log(respuesta);
    res.status(200).json(respuesta);
};

const putProdId = async (req, res) => {
    const prod = req.body.prod;
    const id = req.params.id;
    const respuesta = await service.updateById(id, prod);
    res.status(200).json(respuesta);
};

const deleteProdId = async (req, res) => {
    const id = req.params.id;
    const productosDao = await factory.createDao(config.DB);
    const respuesta = await productosDao.deleteById(id);
    res.status(200).json(respuesta);
};

export {getProdId, postProd, putProdId, deleteProdId}