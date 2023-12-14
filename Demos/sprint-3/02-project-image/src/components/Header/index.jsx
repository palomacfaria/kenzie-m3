import { logo } from "../../assets";

export const Header = () => {
    return(
        <header>
            <img src={logo} alt="Lexgram logo" />
            <button>favoritos</button>
        </header>
    )
}