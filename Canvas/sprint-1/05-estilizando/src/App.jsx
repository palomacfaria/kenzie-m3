import { TeacherCard } from "./components/TeacherCard";
import "./styles/style.css";

function App() {
  const person = {
    name: "Alex",
    courseModule: "M3",
    age: 33
  };

  return (
    <div className="App">
      <TeacherCard
        name={person.name}
        courseModule={person.courseModule}
        age={person.age}
      />
    </div>
  );
}

export default App;
