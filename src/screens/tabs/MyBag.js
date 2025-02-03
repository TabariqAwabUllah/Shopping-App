import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cart from '../../components/Cart'

const MyBag = () => {
  return (
    <View>
      <Text>MyBag</Text>
      <Cart styleIcon={styles.aart}
        styleBadge={styles.stylView}/>
    </View>
  )
}

export default MyBag

const styles = StyleSheet.create({
    aart: {
        color: 'black',
        
    },
    stylView: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})