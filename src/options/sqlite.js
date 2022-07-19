import {config} from "../utils/index.js";

export default {
    client: config.SQLITE_CLIENT,
    connection: {
        filename: config.SQLITE_PROD_ROUTE,
    },
    useNullAsDefault: true,
};