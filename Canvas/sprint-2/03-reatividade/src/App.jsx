import { useState } from "react";

function App() {
/*   const [numberList, setNumberList] = useState([1, 2, 3]);

  const total = numberList.reduce((prevValue, number) => {
    return prevValue + number
  }, 0);

  console.log(total);

  const addNumber = () => {
    setNumberList([...numberList, 4]);
  } */

  const [teacherList, setTeacherList] = useState([{
    name: "Alex",
    job: "Instrutor React",
    budget: 7000
  }]);

  const javascriptTeachers = teacherList.filter(teacher => teacher.job === "Instrutor Javascript");

  console.log("---TEACHER LIST---");
  console.log(teacherList);

  console.log("---JAVASCRIPT TEACHERS---");
  console.log(javascriptTeachers);

  const addTeacher = () => {
    setTeacherList([...teacherList, {name: "Caique", job: "Instrutor Javascript", budget: 7000}])
  }

  return (
    <div className="App">
      <button onClick={addTeacher}>Adicionar professor</button>
    </div>
  )
}

export default App;
