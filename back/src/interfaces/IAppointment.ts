// Appointment:

// id: ID numérico que identifica al turno.

// date: fecha para la cual fue reservado el turno.

// time: hora para la cual fue reservado el turno.

// userId: ID del usuario que agendó el turno, referencia al usuario

// status: status actual del turno, que puede ser “active” o “cancelled”.
interface IAppointment {
  id: Number;
  date: string;
  time: string;
  userId: number;
  status: "active" | "cancelled";
}
export default IAppointment;
