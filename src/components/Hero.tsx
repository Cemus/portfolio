import { Element } from "react-scroll";
import { useEffect, useRef } from "react";

export default function Hero({
  userLang,
  handleSectionClick,
  handleSectionDynamicChange,
  selectedSection,
}: {
  userLang: string;
  handleSectionClick: (e: React.MouseEvent, section: string) => void;
  handleSectionDynamicChange: (sectionName: string) => void;
  selectedSection: string;
}) {
  const heroRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && selectedSection !== "home") {
            handleSectionDynamicChange("home");
          }
        });
      },
      {
        threshold: 1, // IntersectionObserver se lance à partir de ce seuil (1 = complétement visible)
      }
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [handleSectionDynamicChange, selectedSection]);
  return (
    <Element name="home">
      <section
        ref={heroRef}
        className="flex flex-col justify-center items-center text-lShade max-w-[70%] min-h-screen min-w-full gap-10"
      >
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex items-baseline justify-left">
            <h1 className="text-5xl text px-4 leading-normal md:text-6xl">
              {userLang === "fr-FR" ? "Bonjour" : "Hi"} 👋
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline  ">
            <p className="text-2xl text-lShade ">
              {userLang === "fr-FR" ? "Je suis " : "I am "}
              <em className="bg-mBrand px-1 text-lShade not-italic">
                Kévin Lionnet
              </em>
              ,
            </p>
            <div className="flex flex-row items-baseline">
              <p className="text-2xl text-lShade px-1 ">
                {userLang === "fr-FR" ? " développeur web" : " web developper"}
              </p>
              <div className="relative bg-mBrand w-2 h-2 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-center">
          <a
            href="../assets/CV Kévin Lionnet 2023.pdf"
            download="CV Kévin Lionnet 2023.pdf"
            className=" bg-lShade  text-dShade p-2 rounded-md font-bold hover:bg-mBrand hover:text-lShade"
          >
            {userLang === "fr-FR" ? "Télécharger mon CV" : "Download my resume"}
          </a>
          <a
            href="#"
            onClick={(e) => handleSectionClick(e, "projects")}
            className=" bg-lShade  text-dShade p-2 rounded-md font-bold hover:bg-mBrand hover:text-lShade"
          >
            {userLang === "fr-FR" ? "Voir mes projets" : "See my projects"}
          </a>
        </div>
      </section>
    </Element>
  );
}
