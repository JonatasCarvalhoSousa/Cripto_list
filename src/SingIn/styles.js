import React from 'react';
import { View, StyleSheet } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#003366'
    },
    title: {
        fontSize: 30,
        color: '#002244'
    },
    containerButton: {
        margin: 40
    }
});

export default styles;