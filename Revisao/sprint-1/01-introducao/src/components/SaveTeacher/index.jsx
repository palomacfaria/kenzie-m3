export const SaveTeacher = () => {
  const teacher = {
    name: "Alex",
    job: "Instrutor React",
    budget: 15000,
  };

  const saveTeacher = () => {
    console.log(teacher);
  };

  return (
    <div className="App">
      <li>
        <h2>{teacher.name}</h2>
        <span>Cargo: {teacher.job}</span>
        <span>Salário: {teacher.budget}</span>

        <button onClick={saveTeacher}>Salvar professor</button>
      </li>
    </div>
  );
};
