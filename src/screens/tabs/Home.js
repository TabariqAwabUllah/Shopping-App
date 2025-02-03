import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppHeader from '../../components/AppHeader'
import Colours from '../../constants/Colours'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import dummyData from '../../constants/Data'
import sizeOfFont from '../../constants/fontSize'
import ItemDisplay from '../../components/ItemDisplay'
import ItemDetails from '../user/ItemDetails'

const Home = ({navigation}) => {
   
    const goBack =() =>{
        navigation.pop()
    }

    const checkSale=()=>{
        navigation.navigate('SaleCheck')
    }

    const goToItem = (details) =>{
        navigation.navigate('ItemDetails',{ details})
        
    }

    const viewAll =() =>{
        navigation.navigate('Collection')
    }

    // {console.log(navigation.getState());}
  return (
    
   
    <ScrollView style={{backgroundColor: '#fff'}}>
        {/* <AppHeader
        title={'Home'}
        onPress={goBack}/> */}
        
        <TouchableOpacity>
            <ImageBackground
                source={require('../../assets/images/BigBanner.png')}
                style={styles.bgImage} >
            
                    <Text style={styles.onImgTxt}>Fashion {'\n'}Sale</Text>
                    <PrimaryButton
                    title={'Check'}
                    onPress={checkSale}
                    buttonOpacityStyle={styles.buttonOpacityStyle}/>

                </ImageBackground>

            </TouchableOpacity>

            <View style={styles.new}>
                <Text style={styles.new.newText}>New </Text>

                

                <TouchableOpacity
                    onPress={viewAll}
                    style={styles.viewAllButton}>
                    <Text style={styles.viewAllButton.viewAllText}>View All</Text>
                </TouchableOpacity>
            </View>

            <Text style={{marginLeft: wp('5%')}}>
                You’ve never seen it before!</Text>

            <FlatList
            data={dummyData}
            renderItem={({item})=>{
                return(
                    <ItemDisplay item={item} 
                    onPress={()=>goToItem(item)}/>                
                )
                
            }}
            scrollEnabled={true}
            horizontal={true}/>
    </ScrollView>    
  
  )
}

export default Home

const styles = StyleSheet.create({

    bgImage: {
        height: hp('65%'),
        width: wp('100%'),
        // paddingTop: hp(),
        justifyContent: 'flex-end'
    },
    onImgTxt: {
        color: Colours.white,
        fontSize: 35,
        fontWeight: 'bold',
        // paddingVertical: 15,
    },
    buttonOpacityStyle: {
        width: wp('35%'),
        marginVertical: hp(1),
        marginBottom: hp('8%'),
        marginTop: hp('3%')
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

})