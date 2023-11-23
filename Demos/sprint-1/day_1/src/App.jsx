import { CategorySection } from "./components/sections/CategorySection";
import { ProductSection } from "./components/sections/ProductSection";


const App = () => {
  return(
    <>
      <header>
        <h1>FASHIONSTORE</h1>
      </header>
      <main>
        <section>
          <img src="#" alt="#" />
          <div>
            <h1>FASHION STORE</h1>
            <p>Fique por dentro das nossas ultimas promoções</p>
            <button>CONFIRA NOSSAS OFERTAS</button>
          </div>
        </section>
        <CategorySection/>
        <ProductSection/>
        <section>
          <h2>INSCREVA-SE NA NEWSLETTER</h2>
          <input type="text" placeholder="E-MAIL"></input>
          <button>CADASTRE-SE</button>
        </section>
      </main>
      <footer>
        <p>Todos os direitos reservados - Kenzie Academy Brasil</p>
      </footer>

    </>
  ); 
}

export default App;
