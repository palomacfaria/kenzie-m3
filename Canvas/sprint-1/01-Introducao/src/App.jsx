function App() {
  //Javascript
const person = {
  nome: "Paloma",
  modulo: "M3",
  idade: "23",
}

const alertName = () => {
  alert(person.nome);
}

  //JSX
  return (
    <>
    <li>
      <h3>{person.nome} - {person.modulo}</h3>
      <p>Tenho {person.idade} anos.</p>
      <button onClick={alertName}>Quem sou eu?</button>
    </li>
    </>
  )
}

export default App;
