"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BD_BASEDATOS = exports.BD_PASSWORD = exports.BD_USERNAME = exports.BD_PORT = exports.BD_HOST = exports.PORT = void 0;
const path_1 = __importDefault(require("path"));
const dotenv = require("dotenv");
console.log("hola" + __dirname);
dotenv.config({ path: path_1.default.resolve(__dirname, "../../.env") });
console.log(`BD_HOST ${process.env.BD_HOST}`);
exports.PORT = process.env.PORT;
exports.BD_HOST = process.env.POSTGRES_HOST;
exports.BD_PORT = process.env.POSTGRES_PORT || "5432"; // Default to 5432 if not specified
exports.BD_USERNAME = process.env.POSTGRES_USER;
exports.BD_PASSWORD = process.env.POSTGRES_PASSWORD;
exports.BD_BASEDATOS = process.env.POSTGRES_DATABASE;
