import React, { useContext } from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import CitiesContext from '../CitiesContext';
import { useNavigation } from '@react-navigation/native';

const AddLocation: React.FC = () => {

    const { addLocation } = useContext(CitiesContext);

    const navigation = useNavigation();

    return (
        <View>
            <Text>AddLocation</Text>
        </View>
    );
};

export default AddLocation;