import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StackRoutes} from "./stackRoutes"
//import {Home} from '../pages/home';
import {Detail} from '../pages/detail'
import {Favorites} from '../pages/favorite'
import {Search} from '../pages/search'

import {Ionicons} from "@expo/vector-icons"



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
                    borderTopColor:"#fb923c"
                }

            }}
        >
            <Tab.Screen  name='HomeTab'
            options={
                {
                    tabBarIcon:({color,size,focused})=>{
                        if(focused){
                            return   <Ionicons name="home" color="#d97706" size={size} />
                        }
                        return <Ionicons name="home-outline" color="#d97706" size={size} />
                    }
                }
            }
            component={StackRoutes}
             />
       
            <Tab.Screen 
            
            options={
                {
                    tabBarIcon:({color,size,focused})=>{
                        if(focused){
                            return   <Ionicons name="search" color="#d97706" size={size} />
                        }
                        return <Ionicons name="search-outline" color="#d97706" size={size} />
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
                        return <Ionicons name="heart-outline" color="#ef4444" size={size} />
                    }
                }
            }
            name='FavoritesTab' component={Favorites} />
        </Tab.Navigator>
    )
}