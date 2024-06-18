import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const generatePassword = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < 8; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

const savePassword = async (password) => {
  try {
    const savedPasswords = JSON.parse(await AsyncStorage.getItem('passwords')) || [];
    savedPasswords.push(password);
    await AsyncStorage.setItem('passwords', JSON.stringify(savedPasswords));
  } catch (e) {
    console.error(e);
  }
};

const PasswordGenerator = () => {
  const [password, setPassword] = React.useState('');

  const handleGeneratePassword = () => {
    const newPassword = generatePassword();
    setPassword(newPassword);
    savePassword(newPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.password}>{password}</Text>
      <Button title="Generate Password" onPress={handleGeneratePassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  password: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default PasswordGenerator;
