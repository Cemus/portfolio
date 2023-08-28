import Hero from "./components/Hero";
import Header from "./components/Header";
import Projects from "./components/Sections/Projects";
import About from "./components/Sections/About";
import Footer from "./components/Footer";
import Contacts from "./components/Sections/Contacts";

function App() {
  return (
    <div className=" bg-gradient-to-r bg-dShade">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
