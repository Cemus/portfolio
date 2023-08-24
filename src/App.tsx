import Hero from "./components/Hero";
import Header from "./components/Header";
import Projects from "./components/Sections/Projects";
import About from "./components/Sections/About";
import Wave from "./components/Wave";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" bg-gradient-to-r bg-dShade">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
