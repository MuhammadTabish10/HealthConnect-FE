import { DoctorAvailability } from "./doctor-availability.model";
import { Hospital } from "./hospital.model";
import { User } from "./user.model";

export interface Doctor {
    id?: number;
    licenseNumber: string;
    specialty: string;
    yearsOfExperience: number;
    education: string;
    consultationFee: number;
    ratings: number;
    bio: string;
    user: User;
    hospitals: Hospital[];
    availabilities: DoctorAvailability[];
    isActive?: boolean;
}