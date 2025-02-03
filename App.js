import { StyleSheet } from 'react-native'
import React from 'react'
import SignUP from './src/screens/auth/SignUP'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/screens/auth/Login'
import ForgotPassword from './src/screens/auth/ForgotPassword'
import Home from './src/screens/tabs/Home'
import AppNavigation from './src/navigation/AppNavigation'


const App = () => {

  return (
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
   
  )
}

export default App

const styles = StyleSheet.create({})