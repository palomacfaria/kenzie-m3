export const Header = () => {
  const handleClick = () => {
    console.log("Clicou");
  };

  return (
    <header>
      <h1>Paloma Cristina Faria</h1>
      <button onClick={handleClick}>Saiba mais</button>
    </header>
  );
};
