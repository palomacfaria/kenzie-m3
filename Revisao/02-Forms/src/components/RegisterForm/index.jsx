import { useState } from "react"

export const RegisterForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submit = (e) => {
        e.preventDefault();
        console.log({name, email, message});
        setName("");
        setEmail("");
        setMessage("");
    }

    return(
        <form onSubmit={submit}>
            <input type="text" value={name} placeholder="Nome" onChange={(e) => setName(e.target.value)}/>
            <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <textarea  value={message} placeholder="Mensagem" onChange={(e) => setMessage(e.target.value)}/>
            <button type="submit">Enviar mensagem</button>
        </form>
    )
}