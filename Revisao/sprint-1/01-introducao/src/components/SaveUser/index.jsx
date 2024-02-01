export const SaveUser = () => {
  const user = {
    name: "Paloma",
    module: "M3",
    age: 23,
  };

  const alertName = () => {
    alert(user.name);
  };
  return (
    <li>
      <h2>Usuário: {user.name}</h2>
      <p>Módulo: {user.module}</p>
      <p>Idade: {user.age}</p>
      <button onClick={alertName}>Quem sou eu?</button>
    </li>
  );
};
