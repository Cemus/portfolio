import { Element } from "react-scroll";
import { useRef, useEffect } from "react";
import ProjectTemplate from "../Sections/Projects/ProjectTemplate";
import cvCreatorImage from "../../assets/projects/cv-creator.png";
import imageBoardImage from "../../assets/projects/image-board.png";
import shoppingCart from "../../assets/projects/shopping-cart.png";
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
            console.log("project", entry);

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
        <div className="flex items-baseline justify-center w-full">
          <h2
            ref={projectsRef}
            className="text-lShade text-5xl mt-10 font-bold p-4"
          >
            {userLang === "fr-FR" ? "Projets" : "Projects"}
          </h2>
          {selectedSection === "projects" && (
            <span className="bg-mBrand w-4 h-4 rounded-full animate-pop"></span>
          )}
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
          image={imageBoardImage}
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
          image={cvCreatorImage}
          rightSided={false}
        />
        <ProjectTemplate
          name="Beach Trolley"
          liveLink="https://cemus.github.io/shopping-cart/  "
          codeLink="https://github.com/Cemus/shopping-cart"
          description={[
            "Maquette au design réactif d'un commerce d'article de plage.",
          ]}
          stack={["ReactIcon", "HtmlIcon", "CssIcon", "JavaScriptIcon"]}
          image={shoppingCart}
          rightSided={true}
        />
      </section>
      <div className="reversed-wave-bg relative bottom-1  w-full h-16 bg-dDark"></div>
    </Element>
  );
}
