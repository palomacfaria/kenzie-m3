import { StudentCard } from "./components/StudentCard";

function App(){

  return (
    <div className="App">
      <StudentCard name={"Paloma"} age={23} country={"Brasil"}/>
      <StudentCard name={"Jhon"} age={28} country={"EUA"}/>
      <StudentCard name={"Lara"} age={19} country={"Portugal"}/>
    </div>
  )
}

export default App;