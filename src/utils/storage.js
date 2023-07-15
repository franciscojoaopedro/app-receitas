import AsyncStorage from '@react-native-async-storage/async-storage';

// buscar favoritos
export async function buscarFavoritos(key){
    const favoritos=await AsyncStorage.getItem(key);
    return JSON.parse(favoritos) || []
}
// salvar um novo favorito
export async function salvarFavorito(key,newItem){
let favoritos=await buscarFavoritos(key);
let hasItem=favoritos.some(item=>item.id===newItem.id)
if(hasItem){
    console.lo("já esta salvo na lista")
    return 
}
favoritos.push(newItem)

await AsyncStorage.setItem(key,JSON.stringify(favoritos))
return 
}
// remover favoritos
export async function apagarFavorito(id){
    let receitas= await buscarFavoritos("@appreceitas");
    let favoritos= receitas.filter(item=>{return (item.id !==id)})

    await AsyncStorage.setItem("@appreceitas",JSON.stringify(favoritos))
    return favoritos
}


// verificar se já e favorito
export async function ehFavorito(receita){
    let receitas= await buscarFavoritos("@appreceitas")
    const favorito=receitas.find(item=>item.id===receita.id);
    if(favorito){
        return true;
    }
    return false
}