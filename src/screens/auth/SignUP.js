import { StyleSheet, Text, TouchableOpacity, View, Alert, } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderLogin from '../../components/HeaderLogin'
import TextField from '../../components/TextField'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Colours from '../../constants/Colours'
import SocialButton from '../../components/buttons/SocialButton'
import PrimaryButton from '../../components/buttons/PrimaryButton'

const SignUP = ({navigation}) => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [bgColor, setBgColor] = ('')

  // Email format for validation
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  // Func to move to next Screen
  const goToLogin =()=>{
    navigation.navigate('LogIn')
  }

  // Condition to check email format and password length to go to log in Screen
  const signUpButton = () => {
    if(emailRegex.test(email) && password.length>=8){
      goToLogin()
    }else{
      Alert.alert('Invalid Email or Password')
    }
  }

  // For social accounts
  const soon=()=>{
    Alert.alert('Comming Soon!  😊')
  }

  const textFieldFocus = () =>{
    setBgColor(Colours.primary)
  }
  useEffect(()=>{
    // password
    // email
    console.log(`Password:  ${password} email: ${email}` );
  },[password,email])
  
  
return (
    <View style={styles.container}>
      <HeaderLogin
      title={'Sign Up'}/>
      
      {/* TextInput for entering name */}
      <TextField
      placeholder={'Name'}
      enterKeyHint={'next'}
      selectionColor={Colours.primary}
      autoFocus={true}
      value={name}
      onChangeText={(name)=>setName(name)}>
        <MaterialIcon name='check' size={25} color='green' style={styles.icon}/> 
      </TextField>  

     {/* TextInput for entering Email */}
      <TextField
      placeholder={'Email'}
      fieldStyle={styles.textFieldStyle}
      value={email}
      onChangeText={(email)=>setEmail(email)}
      // onFocus={textFieldFocus}
      />

      {/* TextInput for entering Password */}
      <TextField
      placeholder={'Password'}
      fieldStyle={styles.textFieldStyle}
      enterKeyHint={'done'}
      secureTextEntry={true}
      value={password}
      onChangeText={(pswrd)=>setPassword(pswrd)}
      />

      {/* Going to login Screen in case of already have an account */}
      <TouchableOpacity 
      onPress={goToLogin}
      style={styles.alreadyAccount}>
        <Text >Already have an account? </Text>
        <MaterialIcon name='arrow-forward' size={20} color={Colours.primary}/>
      </TouchableOpacity>
     
      {/* Sign Up Button, also moves to login Screen*/}
      <PrimaryButton
        title={'Sign Up'}
        onPress={signUpButton}/>
        
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

export default SignUP

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp(2), 
  },
  textFieldStyle: {
    marginTop: hp(1),    
  },
  alreadyAccount: {
    // paddingHorizontal: wp(1),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // backgroundColor: '#fff',
    marginLeft: '55%',
    width: wp('43%')
  },
  endingLine: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: hp('15%'),
  },
  imageButton: {
    height: hp(7),
    width: wp(13),
    backgroundColor: Colours.white,
    borderRadius: 10,
    marginTop: hp(2),
    marginHorizontal: wp(3)
  },
  icon:{
    color: 'green',
  },

})