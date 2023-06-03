import React, { useId, useState } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cities from './src/screens/Cities';
import AddCity from './src/screens/AddCity';
import AddLocation from './src/screens/AddLocation';
import Locations from './src/screens/Locations';
import Info from './src/screens/Info';
import { testData } from './src/TestData';
import CitiesProvider from './src/CitiesProvider';

export interface City {
  name: string,
  country: string,
  id: string
  locations?: Location[],
}

export interface Location {
  id: string,
  title: string,
  details: string
}

export type RootStackParamList = {
  Home: { cities: City[], setCities: (cities: City[]) => void };
  AddCity: undefined;
  Locations: undefined;
  AddLocation: undefined;
  Info: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const [cities, setCities] = useState<City[]>(testData);

  return (
    <NavigationContainer>
      <CitiesProvider>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerStyle: {
              backgroundColor: 'teal',

            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name='Home' component={Cities}></Stack.Screen>
          <Stack.Screen name='AddCity' component={AddCity}></Stack.Screen>
          <Stack.Screen name='Locations' component={Locations}></Stack.Screen>
          <Stack.Screen name='AddLocation' component={AddLocation}></Stack.Screen>
          <Stack.Screen name='Info' component={Info}></Stack.Screen>

        </Stack.Navigator>
      </CitiesProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#ececec',
    flex: 1,
  }
});

export default App;