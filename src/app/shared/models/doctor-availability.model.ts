import { Hospital } from "./hospital.model";

export interface DoctorAvailability {
    id?: number;
    dayOfWeek: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
    startTime: string;
    endTime: string;
    hospital: Hospital;
    isActive?: boolean;
}