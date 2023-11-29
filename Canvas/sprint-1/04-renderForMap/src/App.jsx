import { EmployeeList } from "./components/EmployeeList";
import { FruitList } from "./components/FruitList";
import { employeeList } from "./data";
import { fruitList } from "./data";

function App() {
 
  return (
    <div className="App">
      <EmployeeList employeeList={employeeList}/>
      <h3>************************************</h3>
      <FruitList fruitlist={fruitList} />
    </div>
  )
}

export default App;
