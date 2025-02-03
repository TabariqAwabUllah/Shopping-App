import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Colours from '../../constants/Colours'

const PrimaryButton = ({title, buttonOpacityStyle, buttonTextStyle,
    onPress
}) => {
  return (
    <View>
      <TouchableOpacity 
        style={[styles.buttonOpacityStyle, buttonOpacityStyle]}
        onPress={onPress}>
        <Text style={[styles.buttonTextStyle, buttonTextStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonTextStyle: {
    textAlign: 'center',
    color: Colours.white,
    fontSize: 19
  },
  buttonOpacityStyle: {
    backgroundColor: Colours.primary,
    height: hp(6),
    borderRadius: wp(40),
    marginVertical: hp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
})