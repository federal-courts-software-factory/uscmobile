import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListView from './screens/TabOneScreen'
import DetailView from './screens/TabTwoScreen'

function HomeScreen() {
  return (
    <View style={{ flex: 1}}>
      <ListView/>
    </View>
  );
}


// darkest = #34495e
// dark = #2c3e50
// light = #95a5a6
// lighter = #7f8c8d
// lighest = #bdc3c7
// contrast = #8e44ad

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerStyle: {
          backgroundColor: '#34495e',
        },
        headerTintColor: '#95a5a6',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#bdc3c7'
        },
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'USC Mobile App'}}/>
        <Stack.Screen name="TabTwo" component={DetailView} options={({ route }) => ({ title: route.params.name })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;