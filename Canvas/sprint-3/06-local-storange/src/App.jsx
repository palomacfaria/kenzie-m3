function App(){

  const saveLocalStorange = () => {
    const object = {id: 1, name:"Paloma"}
    localStorage.setItem("@EXAMPLE", JSON.stringify(object));
  }

  const removeLocalStorange = () => {
    localStorage.removeItem("@EXAMPLE");
    /* localStorage.clear();  LIMPA POR COMPLETO*/
  }

    //Lendo arquivos no local storange e convertendo para o javascript
    const example = localStorage.getItem("@EXAMPLE");
    console.log(JSON.parse(example));

  return(
    <div className="App">
      <button onClick={saveLocalStorange}>Salvar no local storange</button>
      <button onClick={removeLocalStorange}>Remover no local storange</button>
    </div>
  )

}

export default App;