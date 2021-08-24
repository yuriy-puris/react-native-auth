import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import firebase from 'firebase/app';
import Background from '../components/Background';

export default function AuthLoadingScreen({ navigation }: any) {

	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			navigation.reset({
				routes: [{ name: 'HomeScreen' }]
			})
		} else {
			navigation.reset({
				routes: [{ name: 'StartScreen' }]
			})
		}
	});

    return (
        <Background>
			<ActivityIndicator size="large" />
        </Background>
    )
}
