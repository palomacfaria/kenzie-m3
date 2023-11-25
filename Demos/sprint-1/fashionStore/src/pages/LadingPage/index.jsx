import {DefaultTemplate} from "../../components/DefaultTemplate";
import {BannerSection} from "../../components/sections/BannerSection";
import {CategorySection} from "../../components/sections/CategorySection";
import {NewsletterSection} from "../../components/sections/NewsletterSection";
import {ProductSection} from "../../components/sections/ProductSection";

export const LandingPage = () => {
  return (
    <DefaultTemplate>
      <BannerSection />
      <CategorySection />
      <ProductSection />
      <NewsletterSection />
    </DefaultTemplate>
  );
};