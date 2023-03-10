import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ClienteContext } from './context/clienteContext';
import Tarjeta from './componentes/Tarjeta';
import Constants from 'expo-constants';

export default function App() {
  const [cliente, setCliente] = useState({
    id: 991121,
    nombre: 'Peter Parker',
    telefono: '9993667788',
    fechaDeIngreso: '21/11/23',
    fechaDeExpiracion: '21/11/26',
    foto: 'https://pm1.narvii.com/6626/52620d6c6781f479a90ed1ecd8e5cc040080f172_hq.jpg',
    puesto: 'Tech Engineer',
    empresa: 'Oscorp Industries',
    email: 'spiderman@oscorp.com'
  });

  return (
    <ClienteContext.Provider value={cliente}>
      <View style={styles.container}>
        <Tarjeta />
      </View>
    </ClienteContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
