import { Element } from "react-scroll";
import { useEffect, useRef } from "react";
import profile from "../../assets/profile.jpg";

export default function About({
  userLang,
  handleSectionDynamicChange,
  selectedSection,
}: {
  userLang: string;
  handleSectionDynamicChange: (sectionName: string) => void;
  selectedSection: string;
}) {
  const aboutRef = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && selectedSection !== "about") {
            handleSectionDynamicChange("about");
          }
        });
      },
      {
        threshold: 1, //Permet à IntersectionObserver de se lancer à partir d'un certain seuil (1 = complétement visible)
      }
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [handleSectionDynamicChange, selectedSection]);

  return (
    <Element name="about">
      <section className="flex flex-col justify-center bg-dShade text-white p-10 min-h-screen ">
        <div className="flex items-baseline justify-center ">
          <h2
            ref={aboutRef}
            className="text-lShade text-5xl my-10 font-bold p-4"
          >
            {userLang === "fr-FR" ? "Profil" : "About"}
          </h2>
          {selectedSection === "about" && (
            <span className="bg-mBrand w-4 h-4 rounded-full animate-pop"></span>
          )}
        </div>
        <article className="flex flex-col md:flex-row items-center justify-evenly my-10 gap-8 ">
          <div className="relative w-80 h-80 overflow-hidden rounded-full">
            <img
              className="relative bottom-16 w-full h-auto"
              src={profile}
              alt="avatar"
            />
          </div>
          <div className="md:w-1/2 text-justify">
            <h3 className="mb-4 text-4xl">Bonjour !</h3>
            <p className="text-xl leading-relaxed mb-2">
              J'ai découvert le développement en faisant des Game Jam et je me
              suis laissé prendre dans l'engrenage !
            </p>
            <p className="text-xl leading-relaxed mb-2">
              Je me suis mis à apprendre Python pour ensuite me concentrer sur
              le développement web par le biais, notamment, du site{" "}
              <cite>The Odin Project</cite>.
            </p>
            <p className="text-xl leading-relaxed">
              Je suis ouvert à de nouvelles opportunités pour affiner mes
              compétences et relever de nouveaux défis. Je me pousse à évoluer
              constamment en gardant un oeil sur ce qu'il se fait dans le monde
              du développement pour adapter mes pratiques.
            </p>
          </div>
        </article>
      </section>
    </Element>
  );
}
