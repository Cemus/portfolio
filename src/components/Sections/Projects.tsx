import { Element } from "react-scroll";
import ProjectTemplate from "../sections/Projects/ProjectTemplate";
import cvCreatorImage from "../../assets/projects/cv-creator.png";
import imageBoardImage from "../../assets/projects/image-board.png";
import shoppingCart from "../../assets/projects/shopping-cart.png";
import "../../index.css";
import Indicator from "../others/Indicator";
import { memo, useEffect, useRef, useState } from "react";

const ProjectsSection = memo(function ({ userLang }: { userLang: string }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <Element name="projects">
      <section
        id="projects"
        className="flex  flex-col gap-10 bg-dDark text-white items-center p-10"
      >
        <div className="flex items-baseline justify-center w-full">
          <h2
            ref={sectionRef}
            className="text-lShade text-5xl mt-10 font-bold p-4"
          >
            {userLang === "fr-FR" ? "Projets" : "Projects"}
          </h2>
          <Indicator isVisible={isVisible} />
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
});

export default ProjectsSection;
