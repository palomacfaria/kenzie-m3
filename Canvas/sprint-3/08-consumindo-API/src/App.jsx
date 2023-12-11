import { useEffect, useState } from "react";

function App() {
  const [adress, setAdress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [cep, setCep] = useState("");

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const json = await response.json();
      setAdress(json);
      setLoading(false);
    };
    if (cep !== "") {
      loadData();
    }
  }, []);

  const submit = (e) => {
    e.preventDefault();
    setCep(input);
  };

  const cleanAdress = () => {
    setAdress(null);
    setCep("");
    setInput("");
  };

  return (
    <div className="App">
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          {adress ? (
            <div>
              <h1>Meu endereço:</h1>
              <p>
                {adress.cep} - {adress.logradouro} - {adress.bairro} -{" "}
                {adress.localidade} - {adress.uf}
              </p>
              <button onClick={cleanAdress}>Limpar endereço</button>
            </div>
          ) : (
            <div>
              <h1>Forneça seu cep para proseguir....</h1>
              <form onSubmit={submit}>
                <input type="text"  value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Buscar endereço</button>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
