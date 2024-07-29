"use strict";
// const  express = require('express')
// require('dotenv').config()
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const PORT =process.env.PORT || 3000
// const server = express()
// server.listen(PORT, ()=>{
//     console.log(`Server lintening on PORT ${PORT}`);
// })
const server_1 = __importDefault(require("./server"));
const envs_1 = require("./config/envs");
require("reflect-metadata");
const data_source_1 = require("./config/data-source");
console.log(envs_1.PORT + "VARIABE");
data_source_1.AppDataSource.initialize().then((res) => {
    console.log("conexion a la base de datos realizada con exito");
    server_1.default.listen(envs_1.PORT, () => {
        console.log(`Server listening on port ${envs_1.PORT}`);
    });
});
