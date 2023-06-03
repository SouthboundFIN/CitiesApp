import React, { useContext, useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, City, Location } from '../../App';
import { SafeAreaView } from 'react-native-safe-area-context';
import CitiesContext from '../CitiesContext';

type LocationsScreenProps = NativeStackScreenProps<RootStackParamList, 'Locations'>;

const Locations: React.FC<LocationsScreenProps> = (props) => {
    const { navigation } = props;
    const ctx = useContext(CitiesContext);
    const cityId = props.route.params.cityId;
    const selectedCity = ctx.allCities.find((city) => city.id === cityId);

    useEffect(() => {
        navigation.setOptions({
            title: selectedCity?.name || 'Locations',
            headerRight: () => (
                <Button
                    onPress={() => navigateToAddLocation(selectedCity)}
                    title="+"
                    color="#800000"
                />
            ),
        });
    }, [selectedCity, navigation]);

    const navigateToAddLocation = (city: City | undefined) => {
        navigation.navigate('AddLocation', { city });
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={selectedCity?.locations}
                renderItem={({ item }) => (
                    <View style={styles.locationContainer}>
                        <Text style={styles.locationTitle}>{item.title}</Text>
                        <Text>{item.details}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyText}>No locations found for this city.</Text>
                )}
            ></FlatList>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    locationContainer: {
        paddingVertical: 10,
        marginHorizontal: 16,
        borderBottomWidth: 1,
        justifyContent: 'center',
        borderBottomColor: '#ccc',
    },
    locationTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    emptyText: {
        fontSize: 16,
        marginTop: 20,
        alignSelf: 'center',
        paddingTop: 20,
    },
});

export default Locations;
