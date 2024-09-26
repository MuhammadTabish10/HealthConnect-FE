import { Gender } from "../enums/gender.enum";

export interface User {
    id?: number;
    createdAt?: string;
    firstName: string;
    lastName: string;
    age?: number;
    gender?: Gender;
    email?: string;
    password?: string;
    phoneNumber?: string;
    cnic?: string;
    address?: string;
    city?: string;
    isActive?: boolean;
    keycloakUserId?: string;
}