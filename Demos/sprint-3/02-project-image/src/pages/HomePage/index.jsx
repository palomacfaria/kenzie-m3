import {Header} from "../../components/Header";
import {PhotoList} from "../../components/PhotoList";

export const HomePage = () => {
    return(
        <>
            <Header/>
            <main>
                <PhotoList/>
            </main>
        </>
    );
}