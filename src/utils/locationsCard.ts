export type LocationType = {
  ciudad: string;
  pais: string;
  latitud: number;
  longitud: number;
}

export const Locations: LocationType[] = [
  { ciudad: "Paris",   pais: "Francia",      latitud: 48.85,  longitud: 2.3  },
  { ciudad: "Bogotá",   pais: "Colombia",    latitud: 4.71,   longitud: -74.07 },
  { ciudad: "New York", pais: "Estados Unidos", latitud: 40.71, longitud: -74.00 },
];
    