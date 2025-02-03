import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Colours from '../constants/Colours'
import PrimaryButton from './buttons/PrimaryButton'
import DiscountBar from './DiscountBar'

const ItemDisplay = ({item, onPress,itemKey,route }) => {

  const buttonTitle = () => (
    item.usage=='old'? item.discount: item.usage
  )
  return (
    <View style={styles.container}>

      <TouchableOpacity
      key={itemKey}
      onPress={onPress}
      style={styles.flatListView}>

        <ImageBackground source={item.image}
        style={styles.flatImage}> 

          <DiscountBar title={item.usage=='old'? item.discount: item.usage}
          opacityStyle={item.usage=='New'? styles.discountBar: null}/>
          
        </ImageBackground>

        <Text style={styles.brandText}>{item.brand}</Text>

        <Text style={styles.titleText}>{item.title}</Text>

        <Text style={styles.priceText}>{item.price}</Text>

      </TouchableOpacity>
      
    </View>
  )
}

export default ItemDisplay

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatListView: {
        marginHorizontal: wp('5%'),
        marginVertical: hp('2%'),
    },
    flatImage: {
        height: 184,
        width: 148,
        marginVertical: hp('1%')
    },
    brandText: {
        fontSize: 15,
        color: Colours.brandText,
    },
    titleText:{
        fontSize: 20,
        color: Colours.titleText,
    },
    priceText: {
        fontSize: 17,
        color: Colours.primary,
    },
    discountBar: {
      backgroundColor: Colours.black,
    }
})