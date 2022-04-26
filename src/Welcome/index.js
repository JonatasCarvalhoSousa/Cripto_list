import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Welcome() {

    const navigation = useNavigation();

 return (
   <View style={styles.container}>
    <Text style={styles.title}>Bem vindo a Cripo List</Text>   
    <View style={styles.containerButton}>
    <Button title="Clique aqui e descubra" onPress={() => navigation.navigate('SingIn')}/>
    </View>
    </View>
  );
}