import React, { Component } from 'react';
import { SafeAreaView, ImageBackground, Button, StyleSheet, ScrollView, View, Text, StatusBar, Image, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
// import { GoogleSignin } from '@react-native-community/google-signin';
// import googleLogin from './googleLogin'
// const { confirm } = await auth().signInWithPhoneNumber('+1 650-555-3434');

class LoginScreen extends Component {

    state = {
        num: null,
        confirmationResult: undefined
    }


    LogIn = async () => {
     
        auth().signInWithPhoneNumber('+962780049003').then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }

    VerId = async () => {

    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={{ uri: "https://www.sss-solutions.org/wp-content/uploads/2018/01/1116146294-login-page-background-image-112.jpg" }} style={{ width: '100%', height: '100%' }}>
                    <TextInput
                        style={styles.input}
                        placeholder='Phone Number'
                        placeholderTextColor='#fff'
                        onChangeText={val => this.setState({ num: val })}
                        keyboardType={'numeric'}
                    />
                    <View style={styles.button}>
                        <Button
                            title='Continue'
                            onPress={this.LogIn}
                            color="#42A5F5"

                        />
                        <Button
                            title='VerCode'
                            onPress={this.VerId}
                            color="#42A5F5"
                        />
                    </View>

                </ImageBackground>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },

    button: {
        width: "40%",
        alignSelf: 'center',
        marginTop: 50
    }
    ,
    input: {
        width: 350,
        height: 55,
        // backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#fff',
        margin: 10,
        padding: 8,
        color: '#fff',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        alignSelf: 'center'
    }
});

export default LoginScreen;