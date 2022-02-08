import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from "react-native";

export default function KeyDoor(props) {
    const data = props.route.params
    console.log(data.qrcode);
    return (
        <View style={styles.container}>
            
            <View style={styles.title}>
                <Text style={styles.titleHello}>
                    Здравствуйте,
                </Text>
                <Text style={styles.titleName}>
                    {data.fullname}
                </Text>
                <Text style={styles.titleQoute}>
                    Вам хорошего отдыха 
                </Text>
            </View>
            <View style={styles.body}>
                <Image style={styles.qrcode} source={{uri: data.qrcode}}></Image>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.roomNumber}>
                    Номер: {data.roomNumber}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FFAB55',
        alignItems: 'stretch',
    },
    title: {
        flex: 3,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        flex: 5,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom: {
        flex: 2,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleHello: {
        fontSize: 16,
        color: '#333',
        paddingVertical: 4,
    },
    titleName: {
        fontSize: 22,
        color: '#333',
        fontWeight: 'bold',
        paddingVertical: 4,
    },
    titleQoute: {
        fontSize: 18,
        color: 'black',
        paddingVertical: 4,
        fontFamily: 'sans-serif-thin',
        fontStyle: 'italic'
    },
    qrcode: {
        width: 280,
        height: 280,
        borderRadius: 40,
        
    },
    roomNumber: {
        fontSize: 24,
        color: '#333',
        fontWeight: 'bold',
        
    }
})