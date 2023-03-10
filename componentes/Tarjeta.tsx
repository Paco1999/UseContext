import React from 'react';
import { View, StyleSheet } from 'react-native';
import Informacion from './Información';
import FotoDePerfil from './FotoDePerfil';
import Constants from 'expo-constants';

const Tarjeta = () => {
  return (
    <View style={styles.container}>
      <FotoDePerfil />
      <Informacion />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    padding: 20,
    paddingHorizontal: 30,
    paddingTop: Constants.statusBarHeight,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4
  }
});

export default Tarjeta;
