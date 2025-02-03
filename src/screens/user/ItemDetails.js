import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from '../../components/AppHeader'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Colours from '../../constants/Colours'
import Cart from '../../components/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeToCart } from '../../redux/features/cartSlice'
import { cartSlice } from '../../redux/features/cartSlice'

const ItemDetails = ({navigation, route}) => {
    const dispatch = useDispatch()
    // const count = useSelector((state)=>state.cart.counter)
    // console.log('count',count);
    
    const handleAddToCart =()=>{
        dispatch(addToCart())
    }
    const handleRemoveToCart =() =>{
        dispatch(removeToCart())
    }

    const { details } = route.params 
    const goBack =()=> {
        navigation.pop()
    }
  return (
    <View style={styles.container}>
        <AppHeader 
        onPress={goBack}
        title={details.title}
        >
            <Cart/>
        </AppHeader>
                <Image source={details.image}
                style={styles.itemImage}
                resizeMode='contain' />


            <View style={{flexDirection: 'row'}}>
                
                <Text>{details.title}</Text>
                <Button title='Add to Cart' color={'green'}
                 onPress={handleAddToCart}/>
                <Button title='Remove to Cart' color={'green'}
                onPress={handleRemoveToCart}/>
            </View>
            

    </View>
  )
}

export default ItemDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginHorizontal: wp('5%'),
        backgroundColor: Colours.white
    },
    itemImage:{
        height: hp('40%'),
        width: wp('100%'),
        alignSelf: 'center',
    },

})