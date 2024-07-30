import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Credential } from "../entities/credential";
import { Appointment } from "../entities/appointment";
import {
  BD_HOST,
  BD_PORT,
  BD_USERNAME,
  BD_PASSWORD,
  BD_BASEDATOS,
} from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: BD_HOST,
  port: Number(BD_PORT),
  username: BD_USERNAME,
  password: BD_PASSWORD,
  database: BD_BASEDATOS,
  // dropSchema: true,
  ssl: { rejectUnauthorized: false },
  synchronize: true,
  logging: false,

  entities: [User, Credential, Appointment],
  subscribers: [],
  migrations: [],
});
