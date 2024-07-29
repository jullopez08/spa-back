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
exports.BD_HOST = process.env.BD_HOST;
exports.BD_PORT = process.env.BD_PORT;
exports.BD_USERNAME = process.env.BD_USERNAME;
exports.BD_PASSWORD = process.env.BD_PASSWORD;
exports.BD_BASEDATOS = process.env.BD_BASEDATOS;
