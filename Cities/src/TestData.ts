import { City } from "../App";
import uuid from 'react-native-uuid';

const testTampere: City = {
    name: "Tampere",
    country: "Finland",
    id: uuid.v4() as string,
    locations: [
        {
            title: "Näsin neula",
            details: "The Näsi Needle",
            id: uuid.v4().toString(),
        },
        {
            title: "Vaakon nakki",
            details: "Damn good hot dog",
            id: uuid.v4().toString(),
        },
    ]
};

const testKangasala: City = {
    name: "Kangasala",
    country: "Finland",
    id: uuid.v4() as string,
    locations: [
        {
            title: "Kirkkoharjun näkötorni",
            details: "Mead and munkkis",
            id: uuid.v4().toString(),
        },
        {
            title: "Vehoniemen automuseo",
            details: "A museum for petrol heads",
            id: uuid.v4().toString(),
        },
    ]
};

const testPirkkala: City = {
    name: "Pirkkala",
    country: "Finland",
    id: uuid.v4() as string,
    locations: [
        {
            title: "Marinara",
            details: "Pirkanmaa's best iskender kebab",
            id: uuid.v4().toString(),
        },
        {
            title: "Verkkokauppa",
            details: "ICT retailer",
            id: uuid.v4().toString(),
        },
    ]
};

export const testData: City[] = [
    testTampere,
    testKangasala,
    testPirkkala
];