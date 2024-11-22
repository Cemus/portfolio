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
  const handleSectionDynamicChange = (sectionName: string) => {
    setSelectedSection(sectionName);
  };
  const handleSectionClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    scroller.scrollTo(section, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: 0,
    });
  };
  const userLang: string = "fr-FR";
  return (
    <div className=" bg-gradient-to-r bg-dShade overflow-hidden">
      <Header
        userLang={userLang}
        selectedSection={selectedSection}
        handleSectionClick={handleSectionClick}
      />
      <main>
        <Hero
          userLang={userLang}
          handleSectionClick={handleSectionClick}
          selectedSection={selectedSection}
          handleSectionDynamicChange={handleSectionDynamicChange}
        />

        <Projects
          userLang={userLang}
          selectedSection={selectedSection}
          handleSectionDynamicChange={handleSectionDynamicChange}
        />
        <About
          userLang={userLang}
          selectedSection={selectedSection}
          handleSectionDynamicChange={handleSectionDynamicChange}
        />
        <Contacts
          userLang={userLang}
          selectedSection={selectedSection}
          handleSectionDynamicChange={handleSectionDynamicChange}
        />
      </main>
      <Footer userLang={userLang} />
    </div>
  );
}

export default App;
