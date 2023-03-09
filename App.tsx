import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomerContext } from './utils/customersContext';
import CustomerCard from './components/Tarjeta';
import Constants from 'expo-constants';

export default function App() {
  const [customer, setCustomer] = useState({
    id: 991121,
    name: 'Peter Parker',
    phoneNumber: '9993667788',
    joinedDate: '21/11/23',
    expireDate: '21/11/26',
    pic: '../assets/usuario.png',
    job: 'Creative Manager',
    logo: '../assets/oscorp.png',
    email: 'Spiderman@oscorp.com'
  });

  return (
    <CustomerContext.Provider value={customer}>
      <View style={styles.container}>
        <CustomerCard />
      </View>
    </CustomerContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    padding: 15,
    paddingTop: Constants.statusBarHeight
  }
});
