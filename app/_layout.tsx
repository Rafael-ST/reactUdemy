import {SafeAreaView, Text, StyleSheet} from 'react-native'
// import {Comp, Comp01} from '../components/Multi'
// import Primeiro from '../components/primeiro'
// import Estilo from '../components/estilo'
// import Aleatorio from '../components/Aleatorio'
// import MinMax from '../components/MinMax'
// import Titulo from '../components/Titulo'
// import Botao from '../components/Botao'
// import Contador from '../components/Contador'
// import Pai from '../components/direta/Pai'
// import Pai from '../components/indireta/Pai'
// import ContadorV2 from '../components/contador/ContadorV2'
// import Diferenciar from '../components/Diferenciar'
// import ParImpar from '../components/ParImpar'
// import Familia from '../components/Relacao/Familia'
// import Membro from '../components/Relacao/Membro'
// import UsuarioLogado from '../components/UsuarioLogado'
// import ListaProdutos from '../components/Produtos/ListaProdutos'
// import ListaProdutosV2 from '../components/Produtos/ListaProdutosV2'
// import DigiteSeuNome from '../components/DigiteSeuNome'
// import FlexboxV1 from '../components/layout/FlexboxV1'
// import FlexboxV2 from '../components/layout/FlexboxV2'
// import FlexboxV3 from '../components/layout/FlexboxV3'
import FlexboxV4 from '../components/layout/FlexboxV4'



export default () => (
  <SafeAreaView style={style.App}>
    <FlexboxV4/>
    {/*<MinMax min="3" max="20"/>
    <FlexboxV3/>
    <FlexboxV2/>
    <FlexboxV1/>
    <DigiteSeuNome/>
    <ListaProdutosV2/>
    <ListaProdutos/>
    <UsuarioLogado usuario={{nome: 'Gui', email: 'gui@gui.com'}}/>
    <UsuarioLogado usuario={{nome: 'Ana'}}/>
    <UsuarioLogado usuario={{email: 'carlos@empresa.com'}}/>
    <UsuarioLogado usuario={null}/>
    <UsuarioLogado usuario={{}}/>
    <Familia>
      <Membro nome="Bia" sobrenome="Arruda" />
      <Membro nome="Carlos" sobrenome="Arruda" />
    </Familia>
    <Familia>
      <Membro nome="Ana" sobrenome="Silva" />
      <Membro nome="Julia" sobrenome="Silva" />
    </Familia>
    <ParImpar num={4}/>
    <Diferenciar/>
    <ContadorV2/>
    <Pai/>
    <Pai />
    <Contador inicial={100} passo={13}/>
    <Contador />
    <Botao/>
    <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do Produto"/>
    <Aleatorio min={1} max={60} />
     <Comp />
    <Primeiro/>
    <Comp01/> */}
  </SafeAreaView>
)

const style = StyleSheet.create({
  App:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
})