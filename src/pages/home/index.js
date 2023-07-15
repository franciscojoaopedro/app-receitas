import {useState,useEffect} from "react"

import {View,Text,StyleSheet,SafeAreaView,TextInput,TouchableOpacity,
FlatList} from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import { Logo } from '../../components/logo';
import api from "../../services/api"
import {ListaReceitas} from "../../components/listaReceitas"

export function Home(){
    const [inputValue,setInputValue]=useState("");
    const [ receitas,setReceitas]=useState([])

    useEffect(()=>{
       async function fetchApi(){
        const response= await api.get("/receitas");
       setReceitas(response.data)
       }
       fetchApi()
    },[])

    function handleSearch(){
        console.log("vocÊ digitou:")
        console.log(inputValue)
        alert(inputValue)
    }


    return(
        
        <SafeAreaView style={styles.container}>
           <Logo/>
           <Text style={styles.title} >Encontra a receita</Text>
           <Text style={styles.title} >que combina com você</Text>
           <View style={styles.form}>
            <TextInput
            placeholder='Digite o nome da comida...'
            style={styles.input}
            value={inputValue}
            onChangeText={(text)=>setInputValue(text)}
            />
            <TouchableOpacity  onPress={handleSearch} >
                <Ionicons name='search' size={28} color="#f97316" />
            </TouchableOpacity>
           </View>

           <FlatList
           data={receitas}
           keyExtractor={(item)=>String(item.id)}
           renderItem={({item})=> <ListaReceitas data={item}/>}
           showsVerticalScrollIndicator={false}
           
           />

          
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f3f9ff',
        paddingTop:36,
        paddingStart:14,
        paddingEnd:14
    },
    title:{
        fontSize:26,
        fontWeight:"bold",
        color:"#172554"
    },
    form:{
        flexDirection:"row",
        backgroundColor:"#fff",
        width:"100%",
        borderRadius:8,
        marginTop:16,
        marginBottom:16,
        borderWidth:1,
        borderColor:"#ececec",
        paddingLeft:8,
        paddingRight:8,
        alignItems:"center",
        justifyContent:"space-between"

    }
    ,
    input:{
        width:"90%",
        height:54,
        maxHeight:"90%"
    }
})