import {View, Text, StyleSheet} from 'react-native'
// import {Comp, Comp01} from '../components/Multi'
// import Primeiro from '../components/primeiro'
// import Estilo from '../components/estilo'
import MinMax from '../components/MinMax'

export default () => (
  <View style={style.App}>
    <MinMax min="3" max="20"/>
    {/* <Comp />
    <Primeiro/>
    <Comp01/> */}
  </View>
)

const style = StyleSheet.create({
  App:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
})