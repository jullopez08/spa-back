import { Console } from "console";
import path from "path";

const dotenv = require("dotenv");

console.log("hola" + __dirname);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
console.log(`BD_HOST ${process.env.BD_HOST}`);

export const PORT = process.env.PORT;
export const BD_HOST = process.env.POSTGRES_HOST;
export const BD_PORT = process.env.POSTGRES_PORT || "5432"; // Default to 5432 if not specified
export const BD_USERNAME = process.env.POSTGRES_USER;
export const BD_PASSWORD = process.env.POSTGRES_PASSWORD;
export const BD_BASEDATOS = process.env.POSTGRES_DATABASE;
