import { Input } from "../../fragments/Input";

export const ContactForm = () => {
  return (
    <form>
      <h2>Fale conosco</h2>
      <Input />
      <Input />
      <Input />
      <button type="submit">Enviar mensagem</button>
    </form>
  );
};
