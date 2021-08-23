import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';
import { theme } from './src/core/theme';
import Button from './src/components/Button';
import TextInput from './src/components/TextInput';
import Header from './src/components/Header';
import { StartScreen, LoginScreen, RegisterScreen, ResetPasswordScreen } from './src/screens';
import { FIREBASE_CONFIG } from './src/core/config';

const Stack = createStackNavigator();

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
}

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Screen1"
          screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

