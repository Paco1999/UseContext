import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Cliente, ClienteContext } from '../context/clienteContext';

const Informacion = () => {
  const cliente = useContext<Cliente>(ClienteContext);

  const Template = ({ titulo, descripcion }: { titulo: string, descripcion: string }) => (
    <View style={{ flexDirection: 'column', marginBottom: 10, alignItems: 'center' }}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
    </View>
  );

  return (
    <>
      <Template titulo="Nombre" descripcion={cliente.nombre} />
      <Template titulo="Empresa - Puesto" descripcion={`${cliente.empresa}  - ${cliente.puesto}`} />
      <Template titulo="Número de Teléfono" descripcion={cliente.telefono} />
      <Template titulo="Fecha de Ingreso - Expiración" descripcion={`${cliente.fechaDeIngreso}  - ${cliente.fechaDeExpiracion}`} />
      <Template titulo="Correo Electrónico" descripcion={cliente.email} />
    </>
  );
};

const styles = StyleSheet.create(({
  titulo: {
    fontWeight: '600',
    fontSize: 18
  },
  descripcion: {
    fontWeight: '400' 
  }
}));

export default Informacion;
