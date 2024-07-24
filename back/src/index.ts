// const  express = require('express')
// require('dotenv').config()

// const PORT =process.env.PORT || 3000
// const server = express()

// server.listen(PORT, ()=>{
//     console.log(`Server lintening on PORT ${PORT}`);

// })
import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize().then((res) => {
  console.log("conexion a la base de datos realizada con exito");
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
