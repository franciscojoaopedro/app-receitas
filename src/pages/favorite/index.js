import {useState,useEffect} from  "react"
import {View,Text,StyleSheet,SafeAreaView,FlatList} from 'react-native';
import {buscarFavoritos} from "../../utils/storage"
import {useIsFocused} from "@react-navigation/native"

import {ListaReceitas} from "../../components/listaReceitas/"

export function Favorites(){
    const [receitas,setReceitas]=useState([]);
    const isFocused=useIsFocused();

    useEffect(()=>{
        let isAtive=true
        async function buscarReceitas(){
            const result= await buscarFavoritos("@appreceitas");
           if(isAtive){
            setReceitas(result)
           }
        }

        if(isAtive){

        buscarReceitas();
        }
        return()=>{
            isAtive=false;
        }

    },[isFocused])


    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title} >
               Receitas Favoritas
            </Text>
            {receitas.length===0 &&(
                <View style={styles.notication} >
                    <Text style={styles.noticationText}>Você não tem nenhuma receita como favorito!</Text>
                </View>
            )}

        <FlatList
        showsVerticalScrollIndicator={false}
        style={{marginTop:16}}
        data={receitas}
        keyExtractor={(item)=>String(item.id)}
        renderItem={({item})=><ListaReceitas data={item} />}
        />

        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
       flex:1,
        backgroundColor:'#f3f9ff',
        paddingEnd:14,
        paddingStart:14,
        paddingTop:36,
    },
    title:{
        color:"#fb923c",
        fontWeight:"bold",
        fontSize:24
    },
    notication:{
        marginTop:50,
        backgroundColor:'#d97706',
        height:60,
        borderRadius:14,
        alignItems:"center",
        justifyContent:"center",
    },
    noticationText:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:20
    }
})