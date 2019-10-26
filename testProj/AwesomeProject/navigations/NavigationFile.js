import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import LoginScreen from '../components/LoginScreen.js'
import PreLoaderScreen from '../components/PreLoaderScreen.js'
import ListOfWaybills from '../components/ListOfWaybills'

const NavigationFile = createStackNavigator({
    // preLoader:PreLoaderScreen,
    login:LoginScreen
    // list:ListOfWaybills
})


export default createAppContainer(NavigationFile)