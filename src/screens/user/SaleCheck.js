import { FlatList, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Colours from '../../constants/Colours'
import sizeOfFont from '../../constants/fontSize'
import dummyData from '../../constants/Data'
import ItemDisplay from '../../components/ItemDisplay'
import NewViewAll from './NewViewAll'

const SaleCheck = ({navigation}) => {

  // navigate to view all button
  const goToViewAll = () =>{
    navigation.navigate('NewViewAll')
  }

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        {/* First Image */}
        <ImageBackground
        source={require('../../assets/images/SmallBanner.png')}
        style={styles.imageBackground}>
          <Text style={styles.textstreet}>Street clothes</Text>
        </ImageBackground>

        {/* Sale text and view all button */}
        <View style={styles.new}>
          <Text style={styles.new.newText}>Sale</Text>
          <TouchableOpacity
          onPress={goToViewAll}
            style={styles.viewAllButton}>
              
              <Text style={styles.viewAllButton.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

          <Text style={{marginLeft: wp('5%')}}>
          Super summer sale</Text>

        {/* Dresses on sale to display */}
        <FlatList
        data={dummyData}
        renderItem={({item})=>{
          
          return (
            <ItemDisplay item={item}
            itemKey={item.key}/>
          )

        }}
        keyExtractor={(item)=>item.key.toString()}
        scrollEnabled={true}
        horizontal={true}
        />

        {/*New Dresses to display and view all button*/}
        <View style={styles.new}>
          <Text style={styles.new.newText}>New </Text>
          <TouchableOpacity
          onPress={goToViewAll}
            style={styles.viewAllButton}>
              
              <Text style={styles.viewAllButton.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

          <Text style={{marginLeft: wp('5%')}}>
              You’ve never seen it before!</Text>

        <FlatList
        data={dummyData}
        renderItem={({item})=>{
          
          return (
            <ItemDisplay item={item}
            itemKey={item.key}/>
          )

        }}
        keyExtractor={(item)=>item.key.toString()}
        scrollEnabled={true}
        horizontal={true}
        />
      </ScrollView>
    </View>
  )
}

export default SaleCheck

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: hp('25%'),
    width: wp('100%'),
    justifyContent: 'flex-end',  },
  textstreet: {
    color: Colours.white,
    fontSize: sizeOfFont.subHeading,
    fontWeight: 'bold',
    padding: 15,
  },
  new: {
    marginTop: hp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('2%'),
    marginLeft: wp('5%'),
    newText: {
      fontSize: sizeOfFont.subHeading,
      fontWeight: 'bold'
    }
  },
  viewAllButton: {
    alignSelf: 'flex-end',
    viewAllText: {
      color: Colours.black,
    }
  },
  itemDisplay: {
    marginBottom: 5,
  }
})