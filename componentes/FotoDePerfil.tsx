import React, { useContext } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Cliente, ClienteContext } from '../context/clienteContext';

const FotoDePerfil = () => {
  const { foto: uri } = useContext<Cliente>(ClienteContext);

  return <Image style={styles.image} source={{ uri }} resizeMode="contain" />;
};

const styles = StyleSheet.create(({
  image: {
    height: 180,
    width: 140,
    borderRadius: 10,
    marginBottom: 20
  }
}));

export default FotoDePerfil;
