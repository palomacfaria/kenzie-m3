import { useState } from "react"

export const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        console.log({name, email, password});

        setName("");
        setEmail("");
        setPassword("");
    }

    return(
        <form onSubmit={submit}>
            <div>
                <label>Nome</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Senha</label>
                <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit">Cadastre-se</button>
        </form>
    )
}