import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Admire from '../assets/Admire.png';
import stylsp3 from '../styles/stylsp3';

const Pantalla3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Persona Admirada</Text>
      <Image source={Admire} style={styles.image} />
      <Text style={styles.name}>Miguel Angel Alvarez</Text>
      <Text style={styles.date}>04 de Enero de 1953</Text>
      <Text style={styles.description}>
        Él es mi abuelo. Lo admiro porque me apoya con mis estudios.
      </Text>
      <Button
        title="Regresar al Menú"
        onPress={() => navigation.navigate('Bienvenida')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});

export default Pantalla3;