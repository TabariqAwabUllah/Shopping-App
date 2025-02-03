import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import HeaderLogin from '../../components/HeaderLogin'
import TextField from '../../components/TextField'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import AppHeader from '../../components/AppHeader'
import Home from '../tabs/Home'

const ForgotPassword = ({navigation}) => {

    const backClick =() =>{
        navigation.pop()
    }

    const goToHome =()=>{
        navigation.navigate('Tabs')
        // navigation.navigate('Tabs')
    }
  return (
    <View style={styles.container}>

        <HeaderLogin
        style={styles.headerStyle}
        onPressIcon={backClick}
        title={'Forgot Password'}/>            

        <Text style={styles.indicationText}>Please, enter your email address. 
            You will receive a link to create a new password via email.
        </Text>

        <TextField
        placeholder={'Enter Email'}/>

        <PrimaryButton
        buttonOpacityStyle={styles.button}
        title={'SEND'}
        onPress={goToHome}/>


    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: wp(2), 
    },
    headerStyle: {
        marginBottom: hp('5%'),
    },
    indicationText: {
        marginVertical: wp(2)
    },
    button:{
        marginVertical: hp('8%')
    }
})