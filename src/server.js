import express from "express";
import { config } from "./utils/index.js";
import { routerMain } from "./routes/index.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routerMain);

console.log(config);

const server = app.listen(config.PORT, () => console.log("http://localhost:", config.PORT));
server.on("error", (error) => console.log(error));
