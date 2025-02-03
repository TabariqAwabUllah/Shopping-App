import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Colours from '../constants/Colours'

const TextField = ({placeholder, fieldStyle, textMenuHidden,enterKeyHint,
   value, onChangeText, selectionColor, secureTextEntry, autoFocus, contextMenuHidden,
   onBlur, onFocus, placeholderTextColor
}) => {
  return (
    <View style={styles.container}>
      <TextInput
      placeholder={placeholder}
      style={[styles.input, fieldStyle]}
      keyboardType='default'
      placeholderTextColor={placeholderTextColor}
      textMenuHidden={textMenuHidden}
      enterKeyHint={enterKeyHint}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
      selectionColor={selectionColor}
      autoFocus={autoFocus}
      contextMenuHidden={contextMenuHidden}
      onBlur={onBlur}
      onFocus={onFocus}
      >

    
        {/* <MaterialIcon name='check' size={25} color='green' style={styles.icon}/>  */}
      </TextInput>
       

    </View>
  )
}

export default TextField

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 12,
        fontSize: 17,
        // marginHorizontal: wp(2), 
        borderWidth: 0.5,
        paddingVertical: hp(2.5),
        marginVertical: hp(1),
        borderWidth: 1,
    },
    icon:{
        
    }
})