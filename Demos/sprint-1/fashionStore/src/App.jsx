import { Header } from "./components/Header";
import { BannerSection } from "./components/sections/BannerSection";
import { CategorySection } from "./components/sections/CategorySection";
import { NewsletterSection } from "./components/sections/NewsletterSection";
import { ProductSection } from "./components/sections/ProductSection";
import {Footer} from "./components/Footer";
import "./styles/index.css";


const App = () => {
  return(
    <>
      <Header/>
      <main>
        <BannerSection/>
        <CategorySection/>
        <ProductSection/>
        <NewsletterSection/>
      </main>
      <Footer/>
    </>
  ); 
}

export default App;
