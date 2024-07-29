"use strict";
// En el servicio de turnos:
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelTurno = exports.createTurnos = exports.getAllTurnoById = exports.getAllTurnos = void 0;
const appointment_1 = require("../entities/appointment");
const data_source_1 = require("../config/data-source");
// Implementar una función que pueda retornar el arreglo completo de turnos.
// Implementar una función que pueda obtener el detalle de un turno por ID.
// Implementar una función que pueda crear un nuevo turno, siempre guardando, además, el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO.
// Implementar una función que reciba el id de un turno específico y una vez identificado el turno correspondiente, cambiar su estado a “cancelled”.
let id_turno = 0;
const turnos = [];
const getAllTurnos = () => __awaiter(void 0, void 0, void 0, function* () {
    const allTurno = yield data_source_1.AppDataSource.getRepository(appointment_1.Appointment).find();
    if (!allTurno) {
        throw Error("no se encontro Turnos");
    }
    else {
        return allTurno;
    }
});
exports.getAllTurnos = getAllTurnos;
const getAllTurnoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const buscarTurno = yield data_source_1.AppDataSource.getRepository(appointment_1.Appointment).findOneBy({
        id,
    });
    if (!buscarTurno)
        throw Error(" no se encontro turno");
    return buscarTurno;
});
exports.getAllTurnoById = getAllTurnoById;
const createTurnos = (turnoDto) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appmentRepository = data_source_1.AppDataSource.getRepository(appointment_1.Appointment);
        const userId = turnoDto.userId;
        if (typeof userId !== "number") {
            throw new Error("El ID de usuario no es valido");
        }
        const appmentData = yield appmentRepository.create(turnoDto);
        const rsutAppment = yield appmentRepository.save(appmentData);
        return rsutAppment;
    }
    catch (error) {
        console.error("Error al crear el turno ", error);
        throw error;
    }
});
exports.createTurnos = createTurnos;
const cancelTurno = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appRepository = data_source_1.AppDataSource.getRepository(appointment_1.Appointment);
    const turno = yield appRepository.findOneBy({
        id,
    }); //buscar
    if (turno) {
        turno.status = "cancelled";
        yield appRepository.save(turno);
        console.log(`Turno con ID ${turno} cancelado con exito`);
    }
    else {
        console.log(`No se encontro Turno con Id ${turno}`);
    }
});
exports.cancelTurno = cancelTurno;
