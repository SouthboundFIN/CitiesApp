import React, { useContext } from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import CitiesContext from '../CitiesContext';

const AddCity: React.FC = () => {

    const ctx = useContext(CitiesContext)

    //console.log(`AddCity ${JSON.stringify(ctx.allCities)}`)

    return (
        <View>
            <Text>AddCity</Text>
        </View>
    );
};

export default AddCity;