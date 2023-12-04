export const RestrictedSection = ({setIsLogin}) => {
  return (
    <section>
      <h1>Olá, seja bem vindo ao nosso site!</h1>
      <button onClick={() => setIsLogin(false)}>Logout</button>
    </section>
  );
};
