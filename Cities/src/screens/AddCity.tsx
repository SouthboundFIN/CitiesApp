import React, { useContext, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CitiesContext from '../CitiesContext';
import uuid from 'react-native-uuid';
import { City, Location } from '../../App';
import Cities from './Cities';

const AddCity: React.FC = () => {
  const [cityName, setCityName] = useState('');
  const [countryName, setCountryName] = useState('');

  // Using curly brackets to extract the 'add' methods from CitiesContext.ts for direct access
  const { addCity } = useContext(CitiesContext);
  
  const navigation = useNavigation();

  // Validate user input when pressing the "Add City" button
  const handleAddCity = () => {
    if (cityName && countryName) {
      const newCity: City = {
        name: cityName,
        country: countryName,
        id: uuid.v4().toString(),
      };

      addCity(newCity);

      setCityName('');
      setCountryName('');
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="City Name"
        value={cityName}
        onChangeText={setCityName}
      />
      <TextInput
        style={styles.input}
        placeholder="Country Name"
        value={countryName}
        onChangeText={setCountryName}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddCity}>
        <Text style={styles.buttonText}>Add City</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'teal',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AddCity;
