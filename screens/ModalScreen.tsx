import { Link } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {  Platform, StyleSheet, Linking  } from 'react-native';
import {Button} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
 
         <Button contentStyle={styles.close} icon="close" onPress={() => navigation.goBack()}/>
       
     
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
     
      <Text>
        The US Code mobile app is brought to you by the
      </Text>
     
      <Text style={styles.title}>
        Federal Courts Software Factory
      </Text>
   

      <Text>
        Founded in 2020, the FCSF is led by the individual courts. Working together, the FCSF and its projects work to bring the digital transformation to the administration of justice within the federal judiciary. 
      </Text>
 
      
     
        <Button icon="github" mode="contained" onPress={ ()=>{ Linking.openURL('https://github.com/federal-courts-software-factory')}}>GitHub</Button>
    
 
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  close: {
    alignContent: "flex-end",
    fontSize: 64
  }
});
