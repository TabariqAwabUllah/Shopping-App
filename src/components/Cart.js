import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Colours from '../constants/Colours'
import { useSelector } from 'react-redux'

const Cart = ({styleIcon , styleBadge}) => {
    const cartCount = useSelector((state)=> state.cart.counter)
  return (
    <View style={styleBadge}>
        <MaterialIcons name={'shopping-cart'} size={40} color={Colours.primary} style={styleIcon}/>
        {cartCount?
         <View style={styles.cart}>
            <Text style={{textAlign: 'center', color: 'white'}}>{cartCount}</Text>
        </View> : null
        }
        
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    cart: {
        height: hp(2.5),
        width: wp(5),
        borderRadius: wp(3),
        position:'absolute',
        right: 0,
        top: -9,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        
        
    }
})