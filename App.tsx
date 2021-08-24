import React from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import firebase from 'firebase';
import { theme } from './src/core/theme';
import { StartScreen, LoginScreen, RegisterScreen, ResetPasswordScreen, HomeScreen, AuthLoadingScreen, ProfileScreen } from './src/screens';
import { FIREBASE_CONFIG } from './src/core/config';
import { HomeIcon, ProfileIcon } from './assets/icons';
import DrawerContent from './src/components/DrawerContent';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
}

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AuthLoadingScreen"
          screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AuthLoadingScreen" component={AuthLoadingScreen} />
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
            <Stack.Screen name="HomeScreen" component={DrawerNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color }) => <HomeIcon fill={color} />
        }} />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color }) => <ProfileIcon fill={color} />
        }} />
    </Tab.Navigator>
  )
}

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen  name="HomeScreen" component={BottomNavigation} />
    </Drawer.Navigator>
  )
}