import Appoitment from '../models/Appointment';
import { isEqual } from 'date-fns';

interface createAppointmentDTO {
  provider: string;
  date: Date;
}

class AppoitmentsRepository {
  private appointments: Appoitment[];
  constructor() {
    this.appointments = [];
  }

  public all(): Appoitment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appoitment | null {

    const findAppointment = this.appointments.find(
      appointment => isEqual(date, appointment.date)
    );
    return findAppointment || null;
  }

  public create({ provider, date }: createAppointmentDTO): Appoitment {
    const appointment = new Appoitment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppoitmentsRepository;
