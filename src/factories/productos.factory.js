import { ProductosDao } from "../daos/index.js";
// import { config } from "../utils";
import {optionsMariaDB, optionsSQLiteProductos} from "../options/index.js";

class ProductosFactory {
    createDao(db) {
        let respuesta;
        if(db == "sqlite") {
            respuesta = ProductosDao.getInstance(optionsSQLiteProductos);
            respuesta.chequearTabla();
            return respuesta;
        }
        if(db == "mariadb") {
            respuesta = ProductosDao.getInstance(optionsMariaDB);
            respuesta.chequearTabla();
            return respuesta;
        }
        console.log("ingrese una base de datos válida");
        return null
    }
}

export default ProductosFactory;
