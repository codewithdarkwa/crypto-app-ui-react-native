import { StyleSheet, Text, View,Image } from 'react-native';

import {cryptos} from '../cryptodata'

export default function FavouriteCrypto(){
    return(
(
    cryptos.map((crypto,i) =>(
        <View key={i} style={{padding:15}}>
         
         <View style={{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
         }}>
        <View>
            <View style={{
                flexDirection:"row",
                padding:10,
            }}>
                {/* Image */}
                <Image 
                source={crypto.logo}
                style={{
                    width:40,
                    height:40,
                    
                }}
                />
                {/* Currency name */}
                <View style={{paddingLeft:10,}}>
                <Text>{crypto.name}</Text>
                <Text>{crypto.subname}</Text>
                </View>
            </View>
            
        </View>
        <View>
           <Text>{crypto.price}</Text>
           <Text style={{color:crypto.color}}>{crypto.percentage}</Text>
        </View>
           </View>

        </View>
    ))
        
    )
    )
}