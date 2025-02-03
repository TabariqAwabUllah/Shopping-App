import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderLogin from '../../components/HeaderLogin'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import AppHeader from '../../components/AppHeader'

const WomenCatalog = ({ navigation }) => {
    const back = () => {
        navigation.goBack()
    }
    return (
        <SafeAreaView>
        <View>
            <HeaderLogin
                onPressIcon={back}
                title={"Women's Top"}
                // style={{marginRight:1}}
                >

                <TouchableOpacity
                style={{marginRight:20, justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                   <MaterialIcon name='search' size={25} color={'black'} />
                </TouchableOpacity>
                
                
            </HeaderLogin>

            <Text>WomenCatalog</Text>
        </View>
        </SafeAreaView>
    )
}

export default WomenCatalog

const styles = StyleSheet.create({})