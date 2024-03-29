import "./app.scss";
import Contact from "./components/contact/Contact";
// import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/sevices/Services";

const App = () => {
  return (
    <div>
      {/* <Cursor /> */}
      <section id="Hompage">
        <Navbar />
        <Hero />
      </section>
      <section >
        <Parallax type="services" />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section>
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
