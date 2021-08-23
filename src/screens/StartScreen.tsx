import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import Background from '../components/Background';
import Logo from '../components/Logo';

export default function StartScreen({ navigation }: any) {
    return (
        <Background>
            <Logo />
            <Header>Login Template</Header>
            <Paragraph>The easiest way to start with your amazing application.</Paragraph>
            <Button 
                mode="outlined"
                onPress={() => {
                    navigation.navigate('LoginScreen')
                }}>
                Login
            </Button>
            <Button 
                mode="contained"
                onPress={() => {
                    navigation.navigate('RegisterScreen')
                }}>
                Sign up
                </Button>
        </Background>
    )
}
