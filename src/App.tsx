import Hero from "./components/Hero";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import Wave from "./components/Wave";

function App() {
  return (
    <div className=" bg-gradient-to-r from-zinc-800 to-zinc-900">
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
