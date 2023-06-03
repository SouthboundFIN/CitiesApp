import React, { useContext, useEffect } from 'react';

import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import { City, RootStackParamList } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import CitiesContext from '../CitiesContext';

type CitiesScreenProps = NativeStackScreenProps<RootStackParamList, "Home">

const Cities: React.FC<CitiesScreenProps> = (props) => {

    const { navigation } = props;
    const ctx = useContext(CitiesContext);
    const cities = ctx.allCities;


    useEffect(() => {
        navigation.setOptions({
            title: "Cities",
            headerLeft: () => (
                <Button
                    onPress={() => { navigateToInfo() }}
                    title="?"
                    color='#800000'
                    
                />
            ),
            headerRight: () => (
                <Button
                    onPress={() => { navigateToAddCity() }}
                    title="+"
                    color='#800000'
                />
            ),
        });
    });

    const navigateToLocations = (city: City) => {
        //console.log(`Navigating to: ${JSON.stringify(city)}`);
        navigation.navigate('Locations');
    }
    const navigateToInfo = () => {
        //console.log(`Navigating to: ${JSON.stringify(city)}`);
        navigation.navigate('Info');
    }
    const navigateToAddCity = () => {
        //console.log(`Navigating to: ${JSON.stringify(city)}`);
        navigation.navigate('AddCity');
    }

    // console.log(`Cities: ${JSON.stringify(props)}`)
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={cities}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback
                        onPress={() => {navigateToLocations(item)}}
                        key={item.id}
                    >
                        <View style={styles.cityContainer}>
                            <Text style={styles.city}>{item.name}</Text>
                            <Text>{item.country}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                )}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={() => <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', alignSelf: 'center', paddingTop: 20 }}>List empty</Text>}
            ></FlatList>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    cityContainer: {
        paddingVertical: 10,
        marginHorizontal: 16,
        borderBottomWidth: 1,
        justifyContent: 'center',
    },
    city: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        margin: 10,
    },
})

export default Cities;