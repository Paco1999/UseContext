import React, { useContext } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Customer, CustomerContext } from '../utils/customersContext';

const CustomerProfilePic = () => {
  const { pic } = useContext<Customer>(CustomerContext);

  return <Image style={styles.pic} source={require('../assets/usuario.png')} />;
};

const styles = StyleSheet.create({
  pic: {
    width: 80,
    height: 80,
    position: 'absolute',
    zIndex: 1,
    top: -50,
    left: 20
  }
});

export default CustomerProfilePic;
