
import { View,Text ,StyleSheet} from "react-native";



export function Instrucao({data,index}){
    return(
        <View style={styles.container}>
            <Text style={styles.numero} >{index+1} -</Text>
            <Text style={styles.text} >{data}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
      
        flexDirection: "row",
        padding:8,
        alignItems: "center",

    },
    numero:{
        fontWeight:"bold",
        fontSize:18,
        paddingRight:3,
        color:"#fff"
    },
    text:{
        width:"90%",
        fontWeight:400,
        fontSize:14,
        color:"#fff"
    }

})