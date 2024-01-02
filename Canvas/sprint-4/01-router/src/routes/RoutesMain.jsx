import {Route, Routes} from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ContactPage } from "../pages/ContactPage";
import { AboutPage } from "../pages/AboutPage";
import { DeshboardPage } from "../pages/DeshboardPage";

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/deshboard" element={<DeshboardPage/>}/>
        </Routes>
    )
}