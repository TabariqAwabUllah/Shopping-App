import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SocialButton = ({source, style, onPress}) => {
  return (
    <View>
        <TouchableOpacity
        onPress={onPress}>
            <Image
            source={source}
            style={style}/>
        </TouchableOpacity>
     
    </View>
  )
}

export default SocialButton

const styles = StyleSheet.create({})