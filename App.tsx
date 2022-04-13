import * as React from 'react';
import { View, ColorSchemeName, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListView from './screens/TabOneScreen'
import DetailView from './screens/TabTwoScreen'
import ModalScreen from './screens/ModalScreen';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
// darkest = #34495e
// dark = #2c3e50
// light = #95a5a6
// lighter = #7f8c8d
// lighest = #bdc3c7
// contrast = #8e44ad


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#34495e',
    accent: '#95a5a6',
  },
};

function HomeScreen() {
  return (
    <PaperProvider theme={theme}>
    <View style={{ flex: 1}}>
      <ListView/>
    </View>
    </PaperProvider>
  );
}


// darkest = #34495e
// dark = #2c3e50
// light = #95a5a6
// lighter = #7f8c8d
// lighest = #bdc3c7
// contrast = #8e44ad

const Stack = createNativeStackNavigator();

function App({navigation}) {
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
        <Stack.Screen name="Home" component={HomeScreen}  options={({ navigation }: RootTabScreenProps<'HomeScreen'>) => ({
          title: 'United States Code',
          tabBarIcon: ({ theme }) => <TabBarIcon name="code" color={theme.colors.accent} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={theme.colors.accent}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}/>
        <Stack.Screen name="TabTwo" component={DetailView} options={({ route }) => ({ title: route.params.name })} />
        <Stack.Group screenOptions={{ presentation: 'Modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen}  options={{title: 'About the Federal Court Software Factory'}}/>
      </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;