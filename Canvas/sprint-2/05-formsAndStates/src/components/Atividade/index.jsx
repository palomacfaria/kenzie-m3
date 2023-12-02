import { useState } from "react";

export const Atividade = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mensage, setMensage] = useState("");

    const submit = (e) => {
        e.preventDefault();

        console.log({name, email, mensage});

        setName("");
        setEmail("");
        setMensage("");
    }

    return(
        <form onSubmit={submit}>
            <div>
                <label>Nome</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Mensagem</label>
                <textarea value={mensage} onChange={(e) => setMensage(e.target.value)}/>
            </div>
            <button type="submit">Enviar Mensagem</button>
        </form>
    );
}