import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen bg-gradient-to-r from-zinc-800 to-zinc-900 ">
        <Nav />
        <div className="flex flex-col text-white max-w-[50%] p-16 gap-5 mt-32">
          <h1 className=" text-[4rem]">
            Kévin est un développeur front-end français.
          </h1>
          <p className="text-[1.5rem] opacity-80">
            Il construit des expériences de k-lité.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
