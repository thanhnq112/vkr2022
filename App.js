import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Provider as PaperProvider } from 'react-native-paper';
import Login from './components/Login';
import KeyDoor from './components/KeyDoor';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown: false}}
                />
                <Stack.Screen name="Key" component={KeyDoor} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack
// export default function App() {
//     return (
        
//         // <Login></Login>
//         <KeyDoor></KeyDoor>
        
//     );
// }
