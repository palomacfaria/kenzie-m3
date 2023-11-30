import style from "./style.module.scss";
import myHeader from "../../assets/MyHeader.svg";

export const Header = () => {
    return(
        <header className={style.header}>
            Header
            <nav>
                <img src={myHeader} alt="Logo do site"/>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                    <button type="submit">Fale agora</button>
                </ul>
            </nav>
        </header>
    )
}