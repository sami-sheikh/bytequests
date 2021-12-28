import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Developers from "./components/Developers/Developers";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <Footer />
        </Route>
        <Route path="/services" exact>
          <Services />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
