import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/tabs/Home'
import Login from '../screens/auth/Login'
import ForgotPassword from '../screens/auth/ForgotPassword'
import SignUP from '../screens/auth/SignUP'
import Shop from '../screens/tabs/Shop'
import Bag from '../screens/tabs/Bag'
import SaleCheck from '../screens/user/SaleCheck'
import ItemDetails from '../screens/user/ItemDetails'
import Svg, {Path} from 'react-native-svg'
import Colours from '../constants/Colours'
import NewViewAll from '../screens/user/NewViewAll'
import Collection from '../screens/user/Collection'
import WomenCatalog from '../screens/user/WomenCatalog'
import MyBag from '../screens/tabs/MyBag'
import Favourite from '../screens/tabs/Favourite'


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppNavigation = () => {

  const SvgHome =  ({color, height, width}) => {
    <Svg width={30} height={30} viewBox="0 0 30 30" fill={color}>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.2941 27V18.5294H17.9412V27H25V15.7059H29.2353L15.1176 3L1 15.7059H5.23529V27H12.2941Z" fill={color}/>
    </Svg>
  }

  const AppTabs =()=>{
    return (
    <Tab.Navigator screenOptions={{headerShown: false, 

      
    }}>
      <Tab.Screen name='Home' component={HomeStack} options={{
        tabBarIcon: ()=>{
          return(
          <MaterialIcon name='home' size={25} color={'black'} />
        )
        
      } }}/>
      <Tab.Screen name='Shop' component={ShopStack} />

      <Tab.Screen name='MyBag' component={MyBag}/>

      <Tab.Screen name='Favourite' component={Favourite}/>

      <Tab.Screen name='Bag' component={Bag}/>
    </Tab.Navigator>
    )
  }



  const HomeStack = () =>{
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='HomeScreen'
        component={Home}/>

        <Stack.Screen name='SaleCheck'
        component={SaleCheck}/>

        <Stack.Screen name='NewViewAll'
        component={NewViewAll}/>

        <Stack.Screen name='ItemDetails'
        component={ItemDetails}/>

        <Stack.Screen name='Collection' 
        component={Collection}/>
      </Stack.Navigator>     
    )
  }

  const ShopStack = () =>(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='ShopScreen' component={Shop}/>

      <Stack.Screen name='Collection' component={Collection}/>

      <Stack.Screen name='WomenCatalog' component={WomenCatalog}/>
    </Stack.Navigator>
  )

  return (
    
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name='SignUp'
        component={SignUP}/>

      <Stack.Screen
        name='LogIn'
        component={Login}/>

      <Stack.Screen 
        name='ForgotPassword'
        component={ForgotPassword}/>

      <Stack.Screen
       name='Tabs'
       component={AppTabs}/>  
        
    </Stack.Navigator>   
  )
}



export default AppNavigation




const styles = StyleSheet.create({
  tabStyle: {
    
  }
})