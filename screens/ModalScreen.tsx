import { Link } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, Platform, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Text>
        The US Code mobile app is brought to you by the
      </Text>
      <Text>
        <h3>Federal Courts Software Factory</h3>
      </Text>
      
      <Text>
        <p>Founded in 2020, the FCSF is led by the individual courts. Working together, the FCSF and its projects work to bring the digital transformation to the administration of justice within the federal judiciary. </p>
      </Text>
      <Text>
      
      <a href="https://github.com/federal-courts-software-factory" target="_blank">
        <button text="test">GitHub</button>
      </a>
 
      </Text>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
