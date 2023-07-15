import {View,Text,StyleSheet,Pressable,ScrollView,Image,Share} from 'react-native';
import {useRoute,useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from 'react';
import {Entypo,Feather} from "@expo/vector-icons"
import {useState} from "react"

import {Ingrediente} from '../../components/ingredientes'
import {Instrucao} from '../../components/instrucao'
import {salvarFavorito,buscarFavoritos,apagarFavorito,ehFavorito} from "../../utils/storage"

export function Detail(){
    const route=useRoute();
    const navigation=useNavigation();
    const [favorite,setFavorite]=useState(false)
    useLayoutEffect(()=>{

    async function getStatusFavoritos(){
       const receipeFavorite= await ehFavorito(route.params?.data)
       setFavorite(receipeFavorite)
    }
    getStatusFavoritos();


        navigation.setOptions({
          
            title:route.params?.data? route.params?.data.nome:"Detalhes da receita",
            headerRight:()=>(
                <Pressable onPress={()=>handleFavoriteReceita(route.params?.data)} >
                    {favorite?(<Entypo
                    name="heart"
                    size={28}
                    color="#be123c"
                    />):(
                        <Entypo
                    name="heart-outlined"
                    size={28}
                    color="#be123c"
                    />
                    )}
                </Pressable>
            )
        })
    },[navigation,route.params?.data,favorite])
 async function handleShare (){
   try{
    await Share.share({
        title:"App Receita",
       message:`
       Receita :${route.params?.data.nome}\n
       Ingredientes: ${route.params?.data.ingredientes}`,
      
    })
   }catch(error){console.log(error)}
 }

async function handleFavoriteReceita(receita){
 if(favorite){
        await apagarFavorito(receita.id)
        setFavorite(false)
        alert("removido dos favoritos")
    }else{
       await salvarFavorito("@appreceitas",receita)
        setFavorite(true); alert("salvo com sucesso")
    }
   
 }




    return(
        <ScrollView  contentContainerStyle={{paddingBottom:14}}  style={styles.container} showsVerticalScrollIndicator={false}>
           <Pressable>
           <Image
            style={styles.cover}
            source={{uri:route.params?.data.cover}}
            />
            </Pressable>
            

            <View style={styles.headerDetails}>
                <View>
                    <Text style={styles.title} >{route.params?.data.nome}</Text>
                    <Text style={styles.ingredientes}>Ingredientes {route.params?.data.ingredientes.length} </Text>
                </View>
                <Pressable onPress={handleShare}>
                    <Feather name='share-2' size={24} color="#121212" />
                </Pressable>

            </View>

             {route.params?.data.ingredientes.map((item,index)=>
             <Ingrediente
             data={item}
             key={index}
             />
             )}
               
            <View style={styles.instrucao} >
                <Text style={styles.titleText} >Modo de preparo</Text>
                <Feather name='arrow-down' size={24} color="#fff" />
            </View>
         
           <View style={styles.listaReceita}>
           {route.params?.data.instrucoes.map((item,index)=><Instrucao
             data={item}
             key={Number(index)}
             index={Number(index)}
             />)}
           </View>
         
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#f3f9ff',
        paddingTop:14,
        paddingEnd:14,
        paddingStart:14
    },
    cover:{
        width:"100%",
        height:200,
        borderRadius:14,
    }, 
    title:{
        fontSize:18,
        marginTop:14,
        fontWeight:"bold",
        color:"#000",
        marginBottom:4

    },
    
    instrucao:{
        backgroundColor:"#fb923c",
        flexDirection:"row",
        padding:8,
        borderRadius:4,
        marginBottom:14,
        alignItems:"center",
        justifyContent:"space-between"
    }
    ,
    titleText:{
        fontSize:18,
        fontWeight:500,
        color:"#fff",
        marginRight:8,
    }
    ,

    ingredientes:{
        marginBottom:14,
        fontSize:16

    },
    headerDetails :{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBotton:14,
    },
    listaReceita:{
     backgroundColor:"#f97316",
     borderRadius:16,
    }
})