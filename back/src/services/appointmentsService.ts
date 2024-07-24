// En el servicio de turnos:

import { Appointment } from "../entities/appointment";
import { AppDataSource } from "../config/data-source";

// Implementar una función que pueda retornar el arreglo completo de turnos.

// Implementar una función que pueda obtener el detalle de un turno por ID.

// Implementar una función que pueda crear un nuevo turno, siempre guardando, además, el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO.

// Implementar una función que reciba el id de un turno específico y una vez identificado el turno correspondiente, cambiar su estado a “cancelled”.
let id_turno: number = 0;
const turnos: Appointment[] = [];

export const getAllTurnos = async () => {
  const allTurno = await AppDataSource.getRepository(Appointment).find();
  if (!allTurno) {
    throw Error("no se encontro Turnos");
  } else {
    return allTurno;
  }
};

export const getAllTurnoById = async (id: number) => {
  const buscarTurno = await AppDataSource.getRepository(Appointment).findOneBy({
    id,
  });
  if (!buscarTurno) throw Error(" no se encontro turno");
  return buscarTurno;
};

export const createTurnos = async (turnoDto: Appointment) => {
  try {
    const appmentRepository = AppDataSource.getRepository(Appointment);

    const userId = turnoDto.userId;

    if (typeof userId !== "number") {
      throw new Error("El ID de usuario no es valido");
    }
    const appmentData = await appmentRepository.create(turnoDto);
    const rsutAppment = await appmentRepository.save(appmentData);

    return rsutAppment;
  } catch (error) {
    console.error("Error al crear el turno ", error);
    throw error;
  }
};
export const cancelTurno = async (id: number) => {
  const appRepository = AppDataSource.getRepository(Appointment);

  const turno = await appRepository.findOneBy({
    id,
  }); //buscar

  if (turno) {
    turno.status = "cancelled";
    await appRepository.save(turno);
    console.log(`Turno con ID ${turno} cancelado con exito`);
  } else {
    console.log(`No se encontro Turno con Id ${turno}`);
  }
};
