import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Customer, CustomerContext } from '../utils/customersContext';
import CustomerCardInfo from './Información';
import CustomerProfilePic from './Perfil';

const CustomerCard = () => {
  const { id, name, job, joinedDate, phoneNumber, expireDate, email } =
    useContext<Customer>(CustomerContext);
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/oscorp.png')} />
      </View>
      <View style={styles.userInfoContainer}>
        <CustomerProfilePic />
        <View style={styles.nameContainer}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
          <Text>{job}</Text>
        </View>
        <View style={styles.row}>
          <CustomerCardInfo title="ID No" content={id.toString()} />
          <CustomerCardInfo title="Fecha de ingreso" content={joinedDate} />
          <CustomerCardInfo title="Número de telefono" content={phoneNumber} />
          <CustomerCardInfo title="Fecha de expiración" content={expireDate} />
          <CustomerCardInfo title="Correo" content={email} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: 400,
    backgroundColor: 'grey',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7
  },
  logoContainer: {
    paddingHorizontal: 30,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#f8f8ff',
    borderRadius: 20
  },
  logo: {
    width: 60,
    height: 60
  },
  userInfoContainer: {
    flex: 2,
    flexDirection: 'column',
    padding: 20
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 15
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 20,
    rowGap: 10,
    flexBasis: '33%'
  }
});

export default CustomerCard;
