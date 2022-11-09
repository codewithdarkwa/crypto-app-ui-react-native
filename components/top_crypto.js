import {View, Text,Image} from 'react-native';

export default function TopMovers(){
    return(
        <View
        style={{
            padding:15,
        }}
        >
            <View style={{
                flexDirection:"row",
                justifyContent:"space-between",
            }}>
            <Text style={{
                fontSize: 16
            }}>Top Movers</Text>
            <Text style={{
                color:'green',
            }}>See all</Text>
            </View>
            <View style={{
                padding:7,
                flexDirection:"row",
                justifyContent:'space-between'
        }}>
                <View style={{
                    width:160,
                    height:120,
                    backgroundColor:'#fff2f1',
                    borderRadius:7,
                }}>
                    <View style={{padding:10}} >
                    <Image 
                    source={require('../assets/bnb.png')}
                    style={{
                     width:40,
                     height:40,
                     
                    }}/>
                    <Text style={{padding:4}}>BNB $0.98</Text>
                    <Text style={{color:'red'}}>  16.8%</Text>
                    </View>
                </View>
                <View style={{
                    width:160,
                    height:120,
                    backgroundColor:'#eaf9f2',
                    borderRadius:7,
                }}>
                    <View style={{padding:10}}>

                    <Image 
                    source={require('../assets/xrp.png')}
                    style={{
                     width:40,
                     height:40,
                     
                    }}/>
                    <Text style={{padding:4}}>XRP $1.24</Text>
                    <Text style={{color:'green'}}>  20.0%</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}