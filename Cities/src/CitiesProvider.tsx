import React, { ReactNode, useState } from 'react';
import { testData } from './TestData';
import { City, Location } from '../App';
import CitiesContext from './CitiesContext';

interface Props {
  children: ReactNode;
}

const CitiesProvider: React.FC<Props> = ({ children }) => {
  const [cities, setCities] = useState<City[]>(testData);

  const addCity = (city: City) => {
    setCities((prevCities) => [...prevCities, city]);
  };

  const addLocation = (cityId: string, location: Location) => {
    setCities((prevCities) => {
      return prevCities.map((city) => {
        if (city.id === cityId) {
          const locations = city.locations || []; // Handle undefined locations array
          return {
            ...city,
            locations: [...locations, location],
          };
        }
        return city;
      });
    });
  };

  return (
    <CitiesContext.Provider value={{ allCities: cities, addCity, addLocation }}>
      {children}
    </CitiesContext.Provider>
  );
};

export default CitiesProvider;
