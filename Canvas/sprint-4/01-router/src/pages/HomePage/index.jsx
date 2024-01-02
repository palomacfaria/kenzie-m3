import { useNavigate } from "react-router-dom";

export const HomePage = ({setIsLogin}) => {

    const navigate = useNavigate();

    const userLogin = () => {
        setIsLogin(true);
        localStorage.setItem("@LOGIN", "true");
        navigate("/deshboard");
    }

    return(
        <div>
            <h1>Home Page</h1>
            <button onClick={userLogin}>Login</button>
        </div>
    )
}