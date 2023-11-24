import Logo from "../../assets/logo.svg"
import style from "./style.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <img src={Logo} alt="Logo do site" />
    </header>
  );
};
