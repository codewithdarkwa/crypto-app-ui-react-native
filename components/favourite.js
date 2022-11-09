import {Text} from 'react-native'

import FavouriteCrypto from '../components/favourite_crypto'

export default function Favourite() {
 return (
 <>
  <Text style={{
            paddingLeft:10,
            fontSize:16,
          }}>Favourite</Text>
 <FavouriteCrypto />

 </>
 )
  }