import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'


export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize:30,
        marginBottom: 10
    },
    botonGrande:{
        width: 100,
        height: 100,
        backgroundColor: 'gray',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin:5
    },
    botonGrandeTexto:{
        fontSize: 20,
        color: 'white'
    },
    avatarContainer:{
        marginVertical:15,
        alignItems: 'center'
    },
    avatar:{
        width: 150,
        height:150,
        borderRadius:100,
        alignItems:'center',
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50
    },
    botonSimple:{
        textAlign:'center',
        paddingVertical: 5,
    },
    textoBotonSimple: {
        fontSize: 20
    }

})
