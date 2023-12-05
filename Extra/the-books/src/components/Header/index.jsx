import blueLogo from "../../assets/LogoBlue.svg";
import style from "./index.module.scss";

export const Header = () => {
    return(
        <header className={style.container}>
            <img src={blueLogo} alt=""/>
        </header>
    )
}