import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from "../pages/home"
import {Detail} from "../pages/detail"
import {Search} from "../pages/search"


const Stack=createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            options={{
                headerShown:false,
            }}
            
            name='Home' component={Home}  />
            <Stack.Screen 
            options={{
                title:"Detalhes da receita"

            }}
            name='Detail' component={Detail}  />
            <Stack.Screen 
        
             options={{
                title:"Veja o que encontramos",
               
                
            }}
            name='Search' component={Search}  />
        </Stack.Navigator>
    )
}