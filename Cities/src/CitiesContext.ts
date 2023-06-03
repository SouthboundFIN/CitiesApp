import React from "react";
import { City, Location } from "../App";

const emptyCitiesContext: CitiesContext = {
    allCities: [],
    addCity: (city: City) => { },
    addLocation: (city: string, location: Location) => { },
};

const CitiesContext = React.createContext<CitiesContext>(emptyCitiesContext);

export interface CitiesContext {
    allCities: City[];
    addCity: (city: City) => void;
    addLocation: (city: string, location: Location) => void;
};

export default CitiesContext;