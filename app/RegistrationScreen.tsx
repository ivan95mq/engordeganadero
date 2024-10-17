import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const RegistrationScreen = () => {
  const router = useRouter();

  // Estados para los campos del formulario
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [country, setCountry] = useState('');
  const [numFarms, setNumFarms] = useState('');
  const [farm1, setFarm1] = useState('');
  const [farm2, setFarm2] = useState('');

  const handleRegister = () => {
    // Lógica para enviar los datos del formulario a una API
    const registrationData = {
      name,
      surname,
      email,
      phone,
      address,
      city,
      province,
      country,
      numFarms,
      farm1,
      farm2,
    };

    console.log('Registration Data:', registrationData);
    // Aquí deberías hacer una llamada a la API usando fetch o axios para enviar los datos
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/images/meatverde.png')} style={styles.headerImage} />
        <View>
          <Text style={styles.headerLink}>/ Registro</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}>Apellidos</Text>
        <TextInput style={styles.input} value={surname} onChangeText={setSurname} />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize='none' />

        <Text style={styles.label}>Teléfono</Text>
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

        <Text style={styles.label}>Dirección</Text>
        <TextInput style={styles.input} value={address} onChangeText={setAddress} />

        <Text style={styles.label}>Ciudad</Text>
        <TextInput style={styles.input} value={city} onChangeText={setCity} />

        <Text style={styles.label}>Provincia</Text>
        <TextInput style={styles.input} value={province} onChangeText={setProvince} />

        <Text style={styles.label}>País</Text>
        <TextInput style={styles.input} value={country} onChangeText={setCountry} />

        <Text style={styles.label}>Nº de fincas</Text>
        <TextInput style={styles.input} value={numFarms} onChangeText={setNumFarms} keyboardType="numeric" />

        <Text style={styles.label}>Finca 1</Text>
        <TextInput style={styles.input} value={farm1} onChangeText={setFarm1} />

        <Text style={styles.label}>Finca 2</Text>
        <TextInput style={styles.input} value={farm2} onChangeText={setFarm2} />

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Registrarse</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            ¿Y tienes cuenta?{' '}
            <TouchableOpacity onPress={() => router.push('/LoginScreen')}>
              <Text style={styles.loginLink}>Inicia Sesión</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5EDE0', // Color de fondo beige
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  headerLink: {
    fontSize: 16,
    color: '#204929',
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
  input: {
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  registerButton: {
    backgroundColor: '#204929',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  registerButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#808080',
    textAlign: 'center',
  },
  loginLink: {
    fontSize: 14,
    color: '#204929',
    fontWeight: 'bold',
  },
});

export default RegistrationScreen;