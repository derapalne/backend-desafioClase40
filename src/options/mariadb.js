import {config} from "../utils/index.js";

export default {
    client: "mysql",
    connection: {
        host: config.MARIADB_HOST,
        user: config.MARIADB_USER,
        password: config.MARIADB_PASSWORD,
        database: config.MARIADB_DB,
    },
};