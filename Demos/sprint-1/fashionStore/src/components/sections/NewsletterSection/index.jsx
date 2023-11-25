import style from './style.module.css';

export const NewsletterSection = () => {
  return (
    <section className={style.container}>
      <form className="formulary">
        <h2 className="title2">INSCREVA-SE NA NEWSLETTER</h2>
        <input type="text" required placeholder="E-MAIL" />
        <button className="btn" type="submit">CADASTRE-SE</button>
      </form>
    </section>
  );
};
