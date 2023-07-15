
import { View,Text, StyleSheet,Pressable } from "react-native";



export function Ingrediente({data}){
    return(
        <View style={styles.container}>
            <Pressable>
            <Text style={styles.nome} >{data}</Text>
            </Pressable>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        marginBottom:14,
        flexDirection:"row",
        padding:12,
        borderRadius:14
    },
    nome:{
        fontWeight:600,
        fontSize:16,
        textTransform: "capitalize",
    }
})