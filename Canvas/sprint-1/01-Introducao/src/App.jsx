function App() {
  //Javascript
  const teacher = {
    name: "Alex",
    job: "Instrutor React",
    budget: 15000,
  }

  const saveTeacher = (teacher) => {
    console.log(teacher);
  }

  //JSX
  return (
    <div className="App">
        <h2>{teacher.name}</h2>
        <span>Cargo: {teacher.job}</span>
        <span>Salário: {teacher.budget}</span>

        <button onClick={() => saveTeacher(teacher)}>Salvar professor</button>
    </div>
  )
}

export default App;
