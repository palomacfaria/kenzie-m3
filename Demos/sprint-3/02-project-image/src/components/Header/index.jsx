import { logo } from "../../assets";

export const Header = ({ setVisible }) => {
  return (
    <header>
      <img src={logo} alt="Lexgram logo" />
      <button onClick={() => setVisible(true)}>Abrir Modal Teste</button>
    </header>
  );
};
