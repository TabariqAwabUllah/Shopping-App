import { StyleSheet, Text, View,TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import HeaderLogin from '../../components/HeaderLogin'
import TextField from '../../components/TextField'
import Colours from '../../constants/Colours'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import SocialButton from '../../components/buttons/SocialButton'

const Login = ({navigation}) => {

  
  const goToForgot =()=>{
    navigation.navigate('ForgotPassword')
  }

  // To go one screen back
  const backClick = ()=>{
    navigation.pop()
  }

  // For social accounts
  const soon=()=>{
    Alert.alert('Comming Soon!  😊')
  }

  return (
    <View style={styles.container}>
      <HeaderLogin
      onPressIcon={backClick}
      title={'Log In'}/>

      <TextField style={styles.textFieldStyle}
      placeholder={'Email'}/>

      <TextField style={styles.textFieldStyle}
      placeholder={'Password'}/>

      <TouchableOpacity 
      // onPress={goToForgot}
      style={styles.forgotPassword}
      onPress={goToForgot}
      >
        <Text >Forgot Password</Text>
        <MaterialIcon name='arrow-forward' size={20} color={Colours.primary}/>
      </TouchableOpacity>

      <PrimaryButton 
      title={'Log In'}/>

      <Text style={styles.endingLine}>Or sign up with social account</Text>

      {/* Social Media buttons */}
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
  
        <SocialButton
        onPress={soon}
        source={require('../../assets/images/GoogleLogo.webp')}
        style={styles.imageButton}/>

        <SocialButton
        onPress={soon}
        source={require('../../assets/images/FacebookLogo.png')}
        style={styles.imageButton}/>

      </View>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp(2), 
  },
  textFieldStyle: {
    marginTop: hp(1)
    
  },
  forgotPassword: {
    // paddingHorizontal: wp(1),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // backgroundColor: '#fff',
    marginLeft: '55%',
    width: wp('43%')
  },
  imageButton: {
    height: hp(7),
    width: wp(13),
    backgroundColor: Colours.white,
    borderRadius: 10,
    marginTop: hp(2),
    marginHorizontal: wp(3)
  },
  endingLine: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: hp('25%'),
  },
})