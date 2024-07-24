import { Console } from "console";
import path from "path";

const dotenv = require("dotenv");

console.log("hola" + __dirname);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
console.log(`BD_HOST ${process.env.BD_HOST}`);

export const PORT = process.env.PORT;
export const BD_HOST = process.env.BD_HOST;
export const BD_PORT = process.env.BD_PORT;
export const BD_USERNAME = process.env.BD_USERNAME;
export const BD_PASSWORD = process.env.BD_PASSWORD;
export const BD_BASEDATOS = process.env.BD_BASEDATOS;
