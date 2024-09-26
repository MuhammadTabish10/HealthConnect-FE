import { City } from "./city.model";

export interface Hospital {
    id?: number;
    name: string;
    address: string;
    city: City;
    location: Location;
    isActive?: boolean; 
}