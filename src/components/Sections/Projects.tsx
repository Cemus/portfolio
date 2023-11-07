import { Element } from "react-scroll";
import { useRef, useEffect } from "react";
import ProjectTemplate from "../Sections/Projects/ProjectTemplate";
import "../../index.css";

export default function ProjectsSection({
  userLang,
  handleSectionDynamicChange,
  selectedSection,
}: {
  userLang: string;
  handleSectionDynamicChange: (sectionName: string) => void;
  selectedSection: string;
}) {
  const projectsRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && selectedSection !== "projects") {
            handleSectionDynamicChange("projects");
          }
        });
      },
      {
        threshold: 1, //Permet à IntersectionObserver de se lancer à partir d'un certain seuil (1 = complétement visible)
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [handleSectionDynamicChange, selectedSection]);
  return (
    <Element name="projects">
      <section className="flex  flex-col gap-10 bg-dDark text-white items-center p-10">
        <div className="flex items-baseline justify-center">
          <h2
            ref={projectsRef}
            className="text-lShade text-5xl mt-10 font-bold p-4"
          >
            {userLang === "fr-FR" ? "Projets" : "Projects"}
          </h2>
          <span className="bg-mBrand w-4 h-4 rounded-full"></span>
        </div>
        <ProjectTemplate
          name="Image-board"
          liveLink="https://cemus.github.io/image-board-frontend/#/"
          codeLink="https://github.com/Cemus/image-board-frontend"
          description={[
            "L'application permet aux utilisateurs de générer des fils de discussion comportant des images et des commentaires.",
            "Grâce à l'intégration de Node.js et Express, les utilisateurs peuvent soumettre et explorer du contenu en temps réel. L'interface réactive développée avec React facilite la navigation et l'interaction",
          ]}
          stack={[
            "TypeScriptIcon",
            "TailwindIcon",
            "ReactIcon",
            "NodeIcon",
            "MongoIcon",
            "ViteIcon",
          ]}
          image=""
          rightSided={true}
        />
        <ProjectTemplate
          name="CV creator"
          liveLink="https://cemus.github.io/cv-creator/"
          codeLink="https://github.com/Cemus/cv-creator"
          description={[
            "Dans ce projet, j'ai développé un générateur de CV interactif en utilisant React. Les utilisateurs peuvent créer et personnaliser leur CV en ajoutant des détails tels que l'expérience professionnelle, l'éducation et les compétences. L'interface réactive garantit que les modifications apportées sont immédiatement reflétées.",
            "Une fois le CV finalisé, les utilisateurs ont la possibilité de le télécharger au format PDF. Ce projet a renforcé ma compétence en développement React et ma capacité à créer des solutions pratiques pour les utilisateurs, tout en démontrant mon engagement envers une expérience utilisateur fluide et fonctionnelle.",
          ]}
          stack={["JavaScriptIcon", "SassIcon", "ReactIcon", "ViteIcon"]}
          image=""
          rightSided={false}
        />
        <ProjectTemplate
          name="Todo-list"
          liveLink="https://cemus.github.io/to-do-list/ "
          codeLink="https://github.com/Cemus/to-do-list"
          description={[
            "Réalisée sans l'utilisation de frameworks, cette application repose entièrement sur JavaScript, avec une touche d'HTML et de CSS pour une expérience utilisateur fluide.",
            "L'application permet de créer des projets et d'ajouter des tâches à l'intérieur de chacun d'entre eux. Une fois terminés, on peut facilement supprimer les projets ou les tâches.",
          ]}
          stack={["HtmlIcon", "CssIcon", "JavaScriptIcon"]}
          image=""
          rightSided={true}
        />
      </section>
      <div className="reversed-wave-bg relative bottom-1  w-full h-16 bg-dDark"></div>
    </Element>
  );
}
