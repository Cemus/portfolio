import Hero from "./components/sections/Hero";
import Header from "./components/layout/Header";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Footer from "./components/layout/Footer";
import Contacts from "./components/sections/Contacts";

function App() {
  const userLang: string = "fr-FR";
  return (
    <div className=" bg-gradient-to-r bg-dShade overflow-hidden">
      <Header userLang={userLang} />
      <main>
        <Hero userLang={userLang} />
        <Projects userLang={userLang} />
        <About userLang={userLang} />
        <Contacts userLang={userLang} />
      </main>
      <Footer userLang={userLang} />
    </div>
  );
}

export default App;
