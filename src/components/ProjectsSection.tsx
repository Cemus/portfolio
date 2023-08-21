import FirstProject from "./Projects/FirstProject";
import SecondProject from "./Projects/SecondProject";
import ThirdProject from "./Projects/ThirdProject";

export default function ProjectsSection() {
  return (
    <section className="flex  flex-col gap-40 bg-black text-white">
      <h2 className="text-center text-5xl mt-10  font-bold">Projects</h2>
      <FirstProject />
      <SecondProject />
      <ThirdProject />
    </section>
  );
}
