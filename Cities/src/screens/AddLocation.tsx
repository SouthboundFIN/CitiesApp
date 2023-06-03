import React, { useContext, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CitiesContext from '../CitiesContext';
import { Location } from '../../App';

const AddLocation: React.FC = () => {
  const [locationTitle, setLocationTitle] = useState('');
  const [locationDetails, setLocationDetails] = useState('');

  const { addLocation } = useContext(CitiesContext);
  
  const navigation = useNavigation();

  const handleAddLocation = () => {
    if (locationTitle && locationDetails) {
      const newLocation: Location = {
        title: locationTitle,
        details: locationDetails,
        id: Math.random().toString(),
      };

      addLocation(newLocation);

      setLocationTitle('');
      setLocationDetails('');
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Location Title"
        value={locationTitle}
        onChangeText={setLocationTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Location Details"
        value={locationDetails}
        onChangeText={setLocationDetails}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddLocation}>
        <Text style={styles.buttonText}>Add Location</Text>
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

export default AddLocation;
