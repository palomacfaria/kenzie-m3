import { logo } from "../../assets";

export const Header = () => {
    return(
        <header>
            <img src={logo} alt="Lexgram logo" />
            <button onClick={() => serVisible(true)}>Abrir Modal</button>
        </header>
    )
}