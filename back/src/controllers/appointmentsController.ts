import { Request, Response } from "express";
import {
  createTurnos,
  getAllTurnoById,
  getAllTurnos,
  cancelTurno,
} from "../services/appointmentsService";
import { Appointment } from "../entities/appointment";

export const getAptmentsCtroller = async (req: Request, res: Response) => {
  try {
    const turnoGetCtro: Appointment[] = await getAllTurnos();
    res.status(200).json(turnoGetCtro);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAptmentCtroller = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const turnoIdGetCtro: Appointment = await getAllTurnoById(Number(id));
    res.status(200).json(turnoIdGetCtro);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const postAptmentScheduleCtroller = async (
  req: Request,
  res: Response
) => {
  try {
    const appmentData: Appointment = req.body;
    const agendaTurno = await createTurnos(appmentData);
    res.status(200).json(agendaTurno);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
export const putAptmentCancelCtroller = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const turnoCancel = await cancelTurno(id);
    if (turnoCancel !== null) {
      return res.status(200).json(turnoCancel);
    } else {
      res.status(404).json({
        message: "Turno no se encontró",
      });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
