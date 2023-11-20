import Exemplo from "./components/Exemplo";
import {Footer} from "./components/Footer";
const App = () => {
  //Arquivos JSX mistura JS com HTML
  //Tudo que vem antes do retorno da função é lógica JS.
const name = "Cauan";

//TERNARIO
//condicional ? retorno verdadeiro : retorno falso
// ? = IF  : = ELSE

const exibirMensagem = () => {
  console.log("Você clicou no botão");
}

  return(
    //Retornos em react geralmente são JSX
    <>
    <header>Este é o cabeçalho da aplcação</header>
    <button onClick={exibirMensagem}>Exibir mensagem</button>
    <div>
      <h1>Olá mundo!</h1>
      <p>Eu sou o instrutor:{name}</p>
      {name === "Cauan" ? <p>O nome do usuário é Cauan</p> : <p>O nome do usuário não é Cauan</p>}
    </div>
    <Exemplo/>
    <Footer />
    </>
  ); 
}

export default App;
