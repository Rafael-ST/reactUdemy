import {View, Text, StyleSheet} from 'react-native'
// import {Comp, Comp01} from '../components/Multi'
// import Primeiro from '../components/primeiro'
// import Estilo from '../components/estilo'
// import Aleatorio from '../components/Aleatorio'
// import MinMax from '../components/MinMax'
// import Titulo from '../components/Titulo'
// import Botao from '../components/Botao'
import Contador from '../components/Contador'

export default () => (
  <View style={style.App}>
    <Contador inicial={100} passo={13}/>
    <Contador />
    {/*<MinMax min="3" max="20"/>
    <Botao/>
    <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do Produto"/>
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