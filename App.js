import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Home from './Components/Home';
import Notifications from './Components/Notifications';
import History from './Components/History';
import Environments from './Components/Environments';
import Setting from './Components/Setting';
import Maps from './Components/Map';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home" screenOptions={{headerShown:false}}
      >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Environments" component={Environments} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Map" component={Maps}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
