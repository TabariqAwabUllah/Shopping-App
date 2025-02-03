import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import dummyData from '../../constants/Data'
import ItemDisplay from '../../components/ItemDisplay'
import ItemDetails from './ItemDetails'
import AppHeader from '../../components/AppHeader'

const NewViewAll = ({navigation}) => {

  const goToItem = (details) =>{
    navigation.navigate('ItemDetails',{ details})
  }

  const goBack =()=> {
    navigation.pop()
  }
  return (
    <View>
      <AppHeader
      title={'All Items'}
      onPress={goBack}/>
      <FlatList
            data={dummyData}
            renderItem={({item})=>{
                return(
                    <ItemDisplay item={item} 
                    onPress={()=>goToItem(item)}/>                
                )
                
            }}
            scrollEnabled={true}
            horizontal={false}
            numColumns={2}
          />
    </View>
  )
}

export default NewViewAll

const styles = StyleSheet.create({})