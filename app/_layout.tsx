import {View, Text, StyleSheet} from 'react-native'
// import {Comp, Comp01} from '../components/Multi'
// import Primeiro from '../components/primeiro'
// import Estilo from '../components/estilo'
// import Aleatorio from '../components/Aleatorio'
// import MinMax from '../components/MinMax'
import Titulo from '../components/Titulo'

export default () => (
  <View style={style.App}>
    <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do Produto"/>
    {/*<MinMax min="3" max="20"/>
    <Aleatorio min={1} max={60} />
     <Comp />
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