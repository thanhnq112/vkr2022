// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

// import Avatar from './assets/Avatar.jpg'
import Logo from '../assets/logo.png'
// import LoginStyles from '../styles/LoginStyles';
// const login = require('./Components/Login')

export default function Login() {
  
  return (

    <View>
      <View style={styles.boxImg}>
        <Image style={styles.logo} source={Logo} />
      </View>
      <View style={styles.formLogin}>
        <Text style={styles.label}>Мобильный телефон</Text>
        <TextInput style={styles.inputForm}>
        </TextInput>
      </View>

      <View style={styles.formLogin}>
        <Text style={styles.label}>Пароль</Text>
        <TextInput secureTextEntry={true} style={styles.inputForm}>
        </TextInput>
      </View>
    </View>

    // <View>

    // </View>

    // <View style={styles.container}>
    //   <Text style={styles.texts}>Hello from the other side</Text>
    //   <Image style={styles.img} source={Avatar} />
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  boxImg: {
    position: 'relative',
    height: 200,
    width: '100%',
    // backgroundColor: 'green',
  },
  container: {
    // flex: 1,
    // backgroundColor: '#ffcc33',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    width: 300,
    height: 70,
    top: '50%',
    left: '8%',
  },

  formLogin: {
    marginLeft: 30,
    marginRight: 30,
  },
  label: {
    fontSize: 18,
    padding: 6,
    marginTop: 10,
  },
  
  inputForm: {
    width: '100%',
    fontSize: 18,
    height: 40,
    borderWidth: 2,
    borderColor: 'red',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    // backgroundColor: '#fff',
  }
});
