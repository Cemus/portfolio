import Hero from "./components/Hero";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Wave from "./components/Wave";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen bg-gradient-to-r from-zinc-800 to-zinc-900 ">
        <Header />
        <Hero />
        <Projects />
      </div>
    </>
  );
}

export default App;
