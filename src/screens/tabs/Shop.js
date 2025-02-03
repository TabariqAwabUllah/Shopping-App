import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppHeader from '../../components/AppHeader'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Colours from '../../constants/Colours'
import dummyData from '../../constants/Data'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../redux/features/ApiCalling'


const Shop = ({ navigation }) => {

  const [data, setData] = useState([])
  const dispatch = useDispatch()
  const categData = useSelector(state=>state.categoryApi)
  // console.log('see', categData);
  
  
  
  
  const headerBack = () => {
    navigation.navigate('Home')
  }

  const goToSale = () => {
    navigation.navigate('Collection')
  }

  const getData = ()=>{
    dispatch(fetchCategories())
  }

  const goToWomen =()=>{
    navigation.navigate('WomenCatalog')
  }

  // const getAPI = async () =>{
  //   const url= 'https://api.escuelajs.co/api/v1/categories'
  //   const getData = await fetch(url)
  //   const response = await getData.json()
  //   setData(response)

  // }
  // useEffect(()=>{
  //   getAPI()
  // },[])

  return (
    <View style={{ flex: 1 }}>


      <AppHeader title={'Categories'}
        onPress={headerBack}>
        <TouchableOpacity>
          {/* Adding search icon inside appHeader component */}
          <MaterialIcon name='search' size={25} color={'black'} />
        </TouchableOpacity>
      </AppHeader>

      {/* Bar shows if go to direct on gender screen */}
      <View style={styles.selectionView}>
        <TouchableOpacity
          onPress={goToWomen}>
          <Text style={styles.selectionText}>Women</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={getData}
        >
          <Text style={styles.selectionText}>Men</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.selectionText}>Kids</Text>
        </TouchableOpacity>
      </View>

      {/* Parent view just for having same margins */}
      <View style={{
        flex: 1,
        paddingHorizontal: wp(5),
      }}>
        {/* SAle Button */}
        <TouchableOpacity
          style={styles.saleButton}
          onPress={goToSale}
        >
          <Text style={styles.sumSaleText}>SUMMER SALES</Text>
          <Text style={styles.discountText}>Up to 50% off</Text>
        </TouchableOpacity>

        {
        categData.isLoader ? <ActivityIndicator  size="large" color={Colours.primary}/> :
        <FlatList
          data={categData.data}
          // keyExtractor={(item)=>item.id.toString()}
          renderItem={({ item }) => {
            // card that displays item category with image

            return (
              
                <TouchableOpacity
                style={styles.categoryItem}>

                <Text style={styles.title}>{ item.name}</Text>

                <Image source={{ uri: item.image}}
                  style={styles.img}
                  resizeMode='stretch' />

              </TouchableOpacity> 
              
              
            )
          }}
        />
        }
      </View>
    </View>
  )
}

export default Shop

const styles = StyleSheet.create({

  selectionView: {

    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  selectionText: {
    fontSize: 17
  },
  saleButton: {
    backgroundColor: Colours.primary,
    width: '99%',
    height: 100,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'black', 
    marginVertical: hp(2)
  },
  sumSaleText: {
    color: Colours.white,
    fontSize: 24,
    fontWeight: '400'
  },
  discountText: {
    color: Colours.white,
    fontSize: 14,
  },
  categoryItem: {
    flexDirection: 'row',
    backgroundColor: Colours.white,
    width: '99%',
    height: 100,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    // alignContent: 'center',
    marginVertical: hp(1),
    borderWidth: 1,
    borderColor: Colours.black,


  },
  title: {
    marginLeft: wp(5),
    fontWeight: 'bold',
    fontSize: 15
  },
  img: {
    height: 96,
    width: '45%',
    marginRight: wp(0.1),
    marginTop: hp(0.25),
    marginBottom: hp(0.25),
    borderTopRightRadius: 8,
    borderBottomRightRadius: 9,

  }

})