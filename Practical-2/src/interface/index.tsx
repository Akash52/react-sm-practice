export interface IPInfo {
    ip: string;
    version: string;
    city: string;
    country_name: string;
    region: string;
    region_code: number;
    country_capital: string;
    country: string;
    timezone: string;
    postal: number;
    country_area: number;
    country_population: number;
    org: string;
    latitude: number;
    country_calling_code: number;
}

export interface CharType {
    id: number;
    name: string;
    image: string;
    interpretedBy: string;
}
