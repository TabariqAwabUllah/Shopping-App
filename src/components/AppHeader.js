import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Colours from '../constants/Colours'

const AppHeader = ({title,onPress,children, containerStyle, titleStyle}) => {
  return (
    <View style={[styles.container,containerStyle]}>
        <TouchableOpacity
         onPress={onPress}>
            <MaterialIcon name='arrow-back-ios' size={25} color={'#000'}/>
        </TouchableOpacity>
      
      <Text style={[styles.title, titleStyle]}>{title}</Text>

      {children}
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: wp(1),
        marginVertical: hp(1),
        // backgroundColor: Colours.white,
        
        
    },
    title: {
        flex: 1,   
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        paddingVertical: hp(0.3),
    }
})