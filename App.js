import {SafeAreaView} from 'react-native'
import AppBar from './components/appbar'; 
import Favourite from './components/favourite'; 
import Gainer_Losser from './components/gainer_loser'; 
import TopMovers from './components/top_crypto'

export default function App() {
  return(
    <SafeAreaView  style={{marginTop:30}}>
    <AppBar />
    <Favourite />
    <TopMovers />
    <Gainer_Losser />
    </SafeAreaView>
  ) 
}


