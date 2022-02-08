import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    TouchableWithoutFeedback, 
    Keyboard
} from 'react-native';
// import { Provider as PaperProvider } from 'react-native-paper';
// import abc from '../image/review.png'

export default function Login({ navigation }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState()

    // console.log(password);

    const handleSubmit = async () => {
        const data = {
            username: username,
            password: password
        }
        console.log(data)

        const requestOptions = {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data)
        }
        try {
            await fetch('http://192.168.0.100:3333/api/auth/login', requestOptions)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
        
                    navigation.navigate('Key', {...data})
                })
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                
                {/* logo and title */}
                <View style={styles.up}>
                    <Image style={styles.logo} source={require('../image/review.png')} />
                    <Text style={styles.title}>Добро пожаловать в Dinosaurs Hotel</Text>
                </View>

                <View style={styles.down}>
                    {/* login and password */}
                    <View style={styles.textInputContainer}>
                        <TextInput 
                            style={styles.textInput}
                            placeholder='Логин'
                            autoCapitalize = 'none'
                            value={username}
                            onChangeText={(username) => setUsername(username)}
                            >
                        </TextInput>
                    </View>
                    <View style={styles.textInputContainer}>
                        <TextInput 
                            style={styles.textInput}
                            placeholder='Пароль'
                            autoCapitalize = 'none'
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(password) => setPassword(password)}
                            >
                        </TextInput>
                    </View>

                    {/* button submit */}
                    <TouchableOpacity onPress={handleSubmit} style={styles.loginButton}>
                        <Text style={styles.loginButtonTitle}>Войти</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FFAB55',
        alignItems: 'stretch',
    },
    up: {
        flex: 4,
        // backgroundColor: 'green',
        justifyContent: 'center',
        // justifyContent: 'flex-end',
        alignItems: 'center',
    },
    down: {
        flex: 6,
        // backgroundColor: 'green',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 6,
    },
    logo: {
        width: 90,
        height: 90,
        marginVertical: 10,
        paddingVertical: 5,
    },
    title: {
        color: '#333',
        fontSize: 16,
    },
    textInputContainer: {
        paddingHorizontal: 10,
        borderRadius: 6,
        marginBottom: 15,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    textInput: {
        width: 280,
        height: 45,
        paddingHorizontal: 4,
    },
    loginButton: {
        width:300,
        height: 45,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f95b29'
    },
    loginButtonTitle: {
        fontSize: 15,
        color: 'white'
    }
});