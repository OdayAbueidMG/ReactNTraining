
import React, { Component } from 'react'
import {StyleSheet,View,Text} from 'react-native'
import { createStore } from 'redux'
import reducer from './ReduxStore/reducer.js'
import { Provider } from 'react-redux'
// import NavigationFile from './navigations/NavigationFile'
import LoginScreen from './components/LoginScreen'


const store = createStore(reducer)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        {/* <NavigationFile /> */}
        <LoginScreen />
    </Provider>
    )
  }
}


export default App;