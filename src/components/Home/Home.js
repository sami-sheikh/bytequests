import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import Developers from "../Developers/Developers";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Services />
      <Portfolio />
      <Developers />
      <Footer />
    </>
  );
}

export default Home;
