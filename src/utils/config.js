import parseArgs from "minimist";
import "dotenv/config"


const args = parseArgs(process.argv.slice(2));

export default  {
    PORT: args.port || process.env.PORT,
    DB: args.db || process.env.DB,
    SQLITE_CLIENT: process.env.SQLITE_CLIENT || "sqlite3",
    SQLITE_PROD_ROUTE: process.env.SQLITE_PROD_ROUTE || "./src/DB/productos.sqlite",
    MARIADB_HOST: process.env.MARIADB_HOST || "localhost",
    MARIADB_USER: process.env.MARIADB_USER || "root",
    MARIADB_PASS: process.env.MARIADB_PASS || "",
    MARIADB_DB: process.env.MARIADB_DB || "desafio40"
}