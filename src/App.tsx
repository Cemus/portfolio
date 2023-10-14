import { useState } from "react";
import { scroller } from "react-scroll";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Projects from "./components/Sections/Projects";
import About from "./components/Sections/About";
import Footer from "./components/Footer";
import Contacts from "./components/Sections/Contacts";

function App() {
  const [selectedSection, setSelectedSection] = useState<string>("home");
  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
    scroller.scrollTo(section, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: 0,
    });
  };
  const userLang: string = navigator.language;
  return (
    <div className=" bg-gradient-to-r bg-dShade">
      <Header
        userLang={userLang}
        selectedSection={selectedSection}
        handleSectionClick={handleSectionClick}
      />
      <main>
        <Hero userLang={userLang} handleSectionClick={handleSectionClick} />
        <Projects userLang={userLang} />
        <About userLang={userLang} />
        <Contacts userLang={userLang} />
      </main>
      <Footer userLang={userLang} />
    </div>
  );
}

export default App;
