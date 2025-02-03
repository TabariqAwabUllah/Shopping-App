import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colours from '../constants/Colours'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const DiscountBar = ({ opacityStyle, textStyle, title}) => {
  return (
    <View style={[styles.opacityStyle, opacityStyle]}>
      <Text style={[styles.textStyle, textStyle]}>-{title}</Text>
    </View>
  )
}

export default DiscountBar

const styles = StyleSheet.create({
    opacityStyle: {
        backgroundColor: Colours.primary,
        height: hp(4),
        width: wp('15%'),
        borderRadius: wp(40),
        marginVertical: hp(1),
        justifyContent: 'center',
        marginHorizontal: wp(1)
        // alignItems: 'center',
        
      },
      textStyle: {
        textAlign: 'center',
        color: Colours.white,
        fontSize: 17
      },
})