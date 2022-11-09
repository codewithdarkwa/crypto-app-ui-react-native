import{View, Text } from 'react-native'
import {Ionicons} from 'react-native-vector-icons'



export default function AppBar() {
    return (
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:15
      }}>
        {/* Icon */}
        <Ionicons name="menu" size={30}/>
        {/* Text */}
        <View style={{
             alignItems:"center",
        }}>
            <Text>Good Morinig</Text>
            <Text>Favour</Text>
        </View>
        {/* icon */}
        <Ionicons name="notifications-outline" size={30}/>
      </View>
    );
  }