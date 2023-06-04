import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Info: React.FC = () => {
  const [heartColor, setHeartColor] = useState('gold');
  const appVersion = '1.0.0'; // Update version number here

  const onPressHeart = () => {
    setHeartColor(prevColor => (prevColor === '#800000' ? 'teal' : '#800000'));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressHeart} style={styles.iconContainer}>
        <Icon name="heart" size={100} color={heartColor} />
      </TouchableOpacity>
      <Text style={styles.title}>Cities</Text>
      <Text style={styles.version}>Version: {appVersion}</Text>
      <Text style={styles.text}>This app was made by Paavo Virtanen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  version: {
    fontStyle: 'italic',
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Info;
