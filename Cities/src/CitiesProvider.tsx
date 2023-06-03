import React, { ReactNode, useState } from "react";
import { testData } from "./TestData";
import { City, Location } from "../App";
import CitiesContext from "./CitiesContext";

interface Props {
    children: ReactNode;
};



const CitiesProvider: React.FC<Props> = ({ children }) => {
    const [cities, setCities] = useState<City[]>(testData);

    console.log(`CitiesProvider: ${JSON.stringify(cities)}`);

    return (
        <CitiesContext.Provider
            value={{
                allCities: cities,

                addCity: (city: City) => {
                    //Adding a new city from user input in "AddCity.tsx"
                    setCities((prevCities) => [...prevCities, city]);
                },

                addLocation: (city: string, location: Location) => {
                    //TODO: Adding a new location from user input in "AddLocation.tsx"
                    
                },
            }}
        >
            {children}
        </CitiesContext.Provider>
    );
};

export default CitiesProvider;