import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import PasswordGenerator from '../components/PasswordGenerator';
import PasswordList from '../components/PasswordList';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <PasswordGenerator />
      <Button title="View Saved Passwords" onPress={() => navigation.navigate('SavedPasswords')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
