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
            console.log("about", entry);

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
  }, []);

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
          <div className="md:w-1/2 ">
            <h3 className="mb-4 text-4xl text-center md:text-left">
              {" "}
              {userLang === "fr-FR" ? "Enchanté !" : "Nice to meet you!"}
            </h3>
            <p className="md:text-xl text-lg leading-relaxed mb-2">
              {userLang === "fr-FR"
                ? "J'ai découvert le développement en faisant des Game Jam et je me suis laissé prendre dans l'engrenage !"
                : "I discovered development while participating in Game Jams and got hooked!"}
            </p>
            <p className="md:text-xl text-lg leading-relaxed mb-2">
              {userLang === "fr-FR"
                ? "Je me suis mis à apprendre Python pour ensuite me concentrer sur le développement web par le biais, notamment, du site "
                : "I started learning Python and then shifted my focus to web development, particularly through "}
              <cite>The Odin Project</cite>.
            </p>
            <p className="md:text-xl text-lg leading-relaxed">
              {userLang === "fr-FR"
                ? "Je suis ouvert à de nouvelles opportunités pour affiner mes compétences et relever de nouveaux défis. Je me pousse à évoluer constamment en gardant un œil sur ce qui se fait dans le monde du développement pour adapter mes pratiques."
                : "I am open to new opportunities to refine my skills and take on new challenges. I constantly strive to evolve by keeping an eye on developments in the world of programming to adapt my practices."}
            </p>
          </div>
        </article>
      </section>
    </Element>
  );
}
