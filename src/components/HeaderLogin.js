import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


const HeaderLogin = ({ title, onPressIcon, style, children }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.forChild}>

        <TouchableOpacity
          onPress={onPressIcon}>
          <MaterialIcon name='arrow-back-ios' size={30} color={'#000'} />
          
        </TouchableOpacity>
      
        {children}

      </View>
      

      <Text style={styles.heading}>{title}</Text>
      


    </View>
  )

}

export default HeaderLogin

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginHorizontal: wp(2),
    marginVertical: hp(2),
    marginRight: 0,

  },
  heading: {
    paddingVertical: hp(4),
    fontSize: 22,
    fontWeight: 'bold'
  },
  forChild: {
    flexDirection: 'row', 
    justifyContent:'space-between'
  },
})