import { environment } from '../../../environments/environment';

export const API_ENDPOINTS = {
    USER: {
        AUTH: {
            LOGIN: `${environment.apiBaseUrl}/users/login`,
            REGISTER: `${environment.apiBaseUrl}/users/register`,
            REFRESH_TOKEN: `${environment.apiBaseUrl}/users/refresh-token`,
            LOGOUT: `${environment.apiBaseUrl}/users/logout`,
            FORGOT_PASSWORD: `${environment.apiBaseUrl}/users/forgot-password`,
            RESET_PASSWORD: `${environment.apiBaseUrl}/users/reset-password`,
        },
        GET_ALL_USER: `${environment.apiBaseUrl}/users`,
        GET_USER_BY_ID: `${environment.apiBaseUrl}/users/{userId}`,
        UPDATE_USER: `${environment.apiBaseUrl}/users/{userId}`,
        DELETE_USER: `${environment.apiBaseUrl}/users/{userId}`
    },

    DOCTOR: {
        GET_ALL_DOCTORS: `${environment.apiBaseUrl}/doctors`,
        GET_DOCTOR_BY_ID: `${environment.apiBaseUrl}/doctors/{doctorId}`,
        CREATE_DOCTOR: `${environment.apiBaseUrl}/doctors`,
        UPDATE_DOCTOR: `${environment.apiBaseUrl}/doctors/{doctorId}`,
        DELETE_DOCTOR: `${environment.apiBaseUrl}/doctors/{doctorId}`,
        GET_DOCTOR_AVAILABILITY: `${environment.apiBaseUrl}/doctors/availability`,
        GET_ALL_DOCTOR_AVAILABILITY_BY_DOCTOR_ID: `${environment.apiBaseUrl}/doctors/availability/{doctor-id}`
    },

    HOSPITAL: {
        GET_ALL_HOSPITALS: `${environment.apiBaseUrl}/hospitals`,
        GET_HOSPITAL_BY_ID: `${environment.apiBaseUrl}/hospitals/{hospitalId}`,
        GET_HOSPITAL_BY_LOCATION: `${environment.apiBaseUrl}/hospitals/location`,
        GET_ALL_HOSPITALS_BY_CITY_ID: `${environment.apiBaseUrl}/hospitals/city`,
        CREATE_HOSPITAL: `${environment.apiBaseUrl}/hospitals`,
        UPDATE_HOSPITAL: `${environment.apiBaseUrl}/hospitals/{hospitalId}`,
        DELETE_HOSPITAL: `${environment.apiBaseUrl}/hospitals/{hospitalId}`
    },

    CITY: {
        GET_ALL_CITIES: `${environment.apiBaseUrl}/cities`,
        GET_CITY_BY_ID: `${environment.apiBaseUrl}/cities/{id}`
    },

    APPOINTMENT: {
        GET_APPOINTMENTS_BY: `${environment.apiBaseUrl}/appointments/filter`,
        CREATE_APPOINTMENT: `${environment.apiBaseUrl}/appointments`,
        UPDATE_APPOINTMENT: `${environment.apiBaseUrl}/appointments/{appointmentId}`,
        DELETE_APPOINTMENT: `${environment.apiBaseUrl}/appointments/{appointmentId}`,
        CANCEL_APPOINTMENT: `${environment.apiBaseUrl}/appointments/cancel/{appointmentId}`,
        GET_AVAILABLE_TIMESLOTS_FOR_DOCTOR_APPOINTMENT: `${environment.apiBaseUrl}/appointments/doctor/{doctorId}/available-slots`
    },
};
