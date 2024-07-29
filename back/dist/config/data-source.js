"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const credential_1 = require("../entities/credential");
const appointment_1 = require("../entities/appointment");
const envs_1 = require("./envs");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.BD_HOST,
    port: Number(envs_1.BD_PORT),
    username: envs_1.BD_USERNAME,
    password: envs_1.BD_PASSWORD,
    database: envs_1.BD_BASEDATOS,
    // dropSchema: true,
    ssl: { rejectUnauthorized: false },
    synchronize: true,
    logging: false,
    entities: [User_1.User, credential_1.Credential, appointment_1.Appointment],
    subscribers: [],
    migrations: [],
});
