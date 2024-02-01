import { ContactForm } from "../../components/ContactForm";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const ContactPage = () => {
  return (
    <>
      <Header />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};
