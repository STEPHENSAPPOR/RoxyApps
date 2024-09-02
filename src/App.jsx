import About from "./components/About";
import Footer from "./components/Footer";
import Product from "./components/Product";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Team from "./components/Team";
import Goal from "./components/Goal";

const App = () => {
  return (
    <div>
      <NavBar />
      <div id="about">
        <About />
      </div>
      <Goal />
      <div id="product">
        <Product />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="team">
        <Team />
      </div>
      <Footer /> {/* Include Footer if needed */}
    </div>
  );
};

export default App;
