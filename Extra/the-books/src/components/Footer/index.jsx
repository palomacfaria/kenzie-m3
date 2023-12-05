import whiteLogo from "../../assets/LogoWhite.svg";
import style from "./index.module.scss";

export const Footer = () => {
    return(
        <footer className={style.footer}>
            <img src={whiteLogo} alt="" />
            <p>Todos os direitos reservados - Kenzie Academy Brasil</p>
        </footer>
    )
}