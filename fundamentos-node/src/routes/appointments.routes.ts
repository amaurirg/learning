import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointments';


const appointmentsRouter = Router();
const appointments: Appointment[] = [];

appointmentsRouter.get('/', (request, response) => {
  return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;
  const parsedDate = startOfHour(parseISO(date));
  const findAppointmentSameDate = appointments.find(appointment => isEqual(parsedDate, appointment.date));
  if (findAppointmentSameDate) {
    return response.status(400).json({ message: "This appoinment is already booked" });
  }
  const appointment = new Appointment(provider, parsedDate);

  appointments.push(appointment);
  return response.json(appointment);
});

export default appointmentsRouter;
