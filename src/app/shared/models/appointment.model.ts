import { Doctor } from "./doctor.model";
import { Hospital } from "./hospital.model";
import { User } from "./user.model";

export interface Appointment {
    id?: number;
    notes?: string;
    appointmentDate: string;
    appointmentTime: string;
    status: string;
    isActive?: boolean;
    user: User;
    hospital: Hospital;
    doctor: Doctor;
}