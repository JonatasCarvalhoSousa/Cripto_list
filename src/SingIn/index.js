import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function SingIn() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Faça aqui seu login:</Text>   
        <View style={styles.containerButton}>
        <Button title="Entrar" onPress={() => navigation.navigate('ListCripto')}/>
        </View>
        </View>
    );
}