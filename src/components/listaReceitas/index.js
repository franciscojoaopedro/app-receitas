import {View,Text,StyleSheet,TouchableOpacity, Image} from "react-native"
import {LinearGradient} from 'expo-linear-gradient'
export function ListaReceitas({data}){
    return(
        <TouchableOpacity activeOpacity={0.8}  style={styles.container} >
            <Image
           source={{uri:data.cover}}
            style={styles.imagem}
            />
            <View style={styles.info}>
            <Text style={styles.name} >{data.nome}</Text>
            <Text style={styles.description} >{data.ingredientes.length} Ingredientes</Text>
            </View>
            <LinearGradient
                style={styles.gradient}
                colors={['transparent','rgba(0,0,0,0.80)','rgba(0,0,0,0.95)']}
            />
        </TouchableOpacity>
    )
}


const styles=StyleSheet.create({
    container:{
        marginBottom:14,
    },
    imagem:{
        width:"100%",
        height:200,
        borderRadius:14,
    
    },
    info:{
        padding:8,
        position:"absolute",
        zIndex:99,
        bottom:0
    },
    name:{
        fontSize:22,
        fontWeight:"bold",
        color:"#fff"
    },
    description:{
        fontSize:15,
        fontWeight:"bold",
        color:"#fff"
    },
    gradient:{
        position:'absolute',
        left:0,
        rigth:0,
        botton:0,
        height:"55%",
        borderRadius:14,
        zIndex:1,
        backgroundColor:"transparent"
    }


})