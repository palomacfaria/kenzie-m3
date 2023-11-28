import { Footer } from "../Footer";
import { Header } from "../Header";

export const PageTemplate = ({children}) => {
    return(
        <>
            <Header/>
                <main>
                    {children}
                </main>
            <Footer/>
        </>
    );
}