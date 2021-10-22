// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// import Avatar from './assets/Avatar.jpg'
// import Logo from './assets/logo.png'

import Login from './components/Login';

export default function App() {
  return (

    
    <View style={styles.body}>
      <Login />
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
  body: {
    flex: 1,
    backgroundColor: '#ffcc33',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

