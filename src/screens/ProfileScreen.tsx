import React from 'react';
import Header from '../components/Header';
import Background from '../components/Background';
import Button from '../components/Button';
import { logoutUser } from '../api/auth-api';

export default function ProfileScreen({ navigation }: any) {

    return (
        <Background>
            <Header>Profile page</Header>
        </Background>
    )
}
