import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Colours from '../../constants/Colours'
import AppHeader from '../../components/AppHeader'

const Collection = ({navigation}) => {

  const goBack =()=>{
    navigation.pop()
  }
  return (
    <View style={{ flex: 1 }}>
      {/* New collection image */}
      
      <TouchableOpacity>
      
        <ImageBackground
          source={require('../../assets/images/newCollection.png')}
          style={styles.newCollection}
          resizeMode='cover'>

            <AppHeader onPress={goBack}
            containerStyle={styles.header}/>

            <Text style={styles.textNew}>New Collection</Text>
        </ImageBackground>

      </TouchableOpacity>

      <View style={{ flexDirection: 'row', flexShrink: 1 }}>
        {/* Summer Sale */}
        <TouchableOpacity>

          <View style={styles.sumSale}>
            <Text style={styles.sumText}>Summer {'\n'}Sale</Text>
          </View>

        </TouchableOpacity>

        {/* Mens Collection */}
        <TouchableOpacity>
        <ImageBackground source={require('../../assets/images/menCollection.png')}
          style={styles.menCol}
          resizeMode='cover'
        >
          <Text style={styles.menColText}>Men's {'\n'}Collection</Text>
        </ImageBackground>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <ImageBackground source={require('../../assets/images/blackCollection.png')}
          style={styles.blackCol}
          resizeMode='cover'> </ImageBackground>
      </TouchableOpacity>
    </View>
  )
}

export default Collection

const styles = StyleSheet.create({
  newCollection: {
    width: wp('100%'),
    height: hp('50%'),
    justifyContent: 'flex-end',
  },
  textNew: {
    textAlign: 'right',
    color: Colours.white,
    marginBottom: hp('2%'),
    marginRight: wp('5%'),
    fontWeight: 'bold',
    fontSize: 25,
  },
  sumSale: {
    backgroundColor: Colours.white,
    width: wp('40%'),
    aspectRatio: 1.0,
    // height: hp('25%'),
    justifyContent: 'center',
  },
  sumText: {
    marginLeft: wp(5),
    fontWeight: 'bold',
    fontSize: 27,
    color: Colours.primary
  },
  menCol: {
    // flex: 1,
    aspectRatio: 0.65,
    // height: hp('70%'),
    width: wp('60%'),
    // justifyContent:'center'
  },
  menColText: {
    color: '#fff',
    paddingTop: hp('20%'),
    marginLeft: wp('15%'),
    fontSize: 30,
    fontWeight: 'bold'
  },
  blackCol: {
    aspectRatio: 0.8,
    width: wp('40%'),

  },
  header: {
    position: 'absolute',
    top: 0,
  },
  headerTitle: {
    color: Colours.white,
  }
})