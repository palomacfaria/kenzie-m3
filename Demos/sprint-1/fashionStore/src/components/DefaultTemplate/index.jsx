import { Header } from "../Header";
import { Footer } from "../Footer";

//children é uma palavra reservada do React
export const DefaultTemplate = ({children}) => {
    return(
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}