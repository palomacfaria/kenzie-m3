export const LoginSection = ({setIsLogin}) => {
    return(
        <section>
            <button onClick={() => setIsLogin(true)}>Login</button>
        </section>
    )
}