import ProjectTemplate from "../Sections/Projects/projectTemplate";

export default function ProjectsSection() {
  return (
    <section className="flex  flex-col gap-40 bg-lShade text-white">
      <h2 className="text-dAccent text-center text-5xl mt-10  font-bold">
        Projects
      </h2>
      <ProjectTemplate
        name="Image-board"
        liveLink="#"
        codeLink="#"
        description="blabla"
        stack={["js"]}
        image=""
      />
    </section>
  );
}
