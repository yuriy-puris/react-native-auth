import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper'
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Paragraph from '../components/Paragraph';
import Background from '../components/Background';
import Logo from '../components/Logo';
import { theme } from '../core/theme';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import BackButton from '../components/BackButton';
import { loginUser } from '../api/auth-api';
import GoogleLogin from '../components/GoogleLogin';

export default function LoginScreen({ navigation }: any) {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const onLoginPressed = async () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError) {
          setEmail({ ...email, error: emailError })
          setPassword({ ...password, error: passwordError })
          return
        }
        setLoading(true)
        const response = await loginUser({
          email: email.value,
          password: password.value,
        })
        if (response.error) {
          setError(response.error)
        } else {
            navigation.replace('HomeScreen')
        }
        setLoading(false)
      }

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <TextInput 
                label="Email"
                value={email.value}
                errorText={email.error}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
            />
            <TextInput 
                label="Password"
                secureTextEntry
                value={password.value}
                errorText={password.error}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
            />
            <View style={styles.forgotPassword}>
                <TouchableOpacity onPress={() => navigation.replace('ResetPasswordScreen')}>
                    <Text style={styles.forgot}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
            <Button 
                mode="outlined"
                onPress={onLoginPressed}>
                Log in
            </Button>
            <Button mode="contained">Sign in</Button>
            <GoogleLogin />
            <View style={styles.row}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
                    <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24
    },
    forgot: {
        fontSize: 13,
        color: theme.colors.secondary
    }
})