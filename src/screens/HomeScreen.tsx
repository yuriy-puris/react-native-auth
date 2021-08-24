import React from 'react';
import Header from '../components/Header';
import Background from '../components/Background';
import Button from '../components/Button';
import { logoutUser } from '../api/auth-api';

export default function HomeScreen({ navigation }: any) {

    return (
        <Background>
            <Header>Home page</Header>
			<Button 
				mode="contained"
				onPress={() => {
					logoutUser()
				}}>
				Logout
			</Button>
        </Background>
    )
}
