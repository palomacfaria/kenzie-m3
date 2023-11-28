import { Input } from "../../fragments/Input";

export const ContactForm = () => {
  return (
    <form>
      <h2>Fale conosco</h2>
      <Input type="text" label="Nome: " id="name" />
      <Input type="email" label="Email: " id="email"/>
      <Input type="password" label="Senha: " id="password"/>
      <button type="submit">Enviar mensagem</button>
    </form>
  );
};
