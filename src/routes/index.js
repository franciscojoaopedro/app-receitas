import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import {Home} from '../pages/home';
import {Detail} from '../pages/detail'
import {Favorites} from '../pages/favorite'
import {Search} from '../pages/search'

import {Ionicons} from "@expo/vector-icons"
import { MaterialIcons } from '@expo/vector-icons'; 


const Tab=createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
                headerShown:false,
                tabBarHideOnKeyboard:true,
                tabBarShowLabel:false,
                tabBarActiveTintColor:"#22c55e",


                tabBarStyle:{
                    backgroundColor:"#fff",
                    borderTopWidth:1,
                    borderTopColor:"#86efac"
                }

            }}
        >
            <Tab.Screen  name='HomeTab'
            options={
                {
                    tabBarIcon:({color,size,focused})=>{
                        if(focused){
                            return   <Ionicons name="home" color="#6ee7b7" size={size} />
                        }
                        return <Ionicons name="home-outline" color="#6ee7b7" size={size} />
                    }
                }
            }
            component={Home}
             />
            <Tab.Screen 
             options={
                {
                    tabBarIcon:({color,size,focused})=>{
                        if(focused){
                            return   <MaterialIcons name="details" color="#6ee7b7" size={size} />
                        }
                        return <MaterialIcons name="details" color="#6ee7b7" size={size} />
                    }
                }
            }
            
            name='DetailTab' component={Detail} />
            <Tab.Screen 
            
            options={
                {
                    tabBarIcon:({color,size,focused})=>{
                        if(focused){
                            return   <Ionicons name="search" color="#6ee7b7" size={size} />
                        }
                        return <Ionicons name="search-outline" color="#6ee7b7" size={size} />
                    }
                }
            }
            name='SearchTab' component={Search} />
            <Tab.Screen 
            
            options={
                {
                    tabBarIcon:({color,size,focused})=>{
                        if(focused){
                            return  <Ionicons name="heart" color="#be123c" size={size} />
                        }
                        return <Ionicons name="heart-outline" color="#6ee7b7" size={size} />
                    }
                }
            }
            name='FavoritesTab' component={Favorites} />
        </Tab.Navigator>
    )
}