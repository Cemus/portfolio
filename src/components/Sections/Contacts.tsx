import { Element } from "react-scroll";
import { useEffect, useRef } from "react";
import { GitHubIcon, LinkedInIcon } from "../icones/Icones";

export default function Contacts({
  userLang,
  handleSectionDynamicChange,
  selectedSection,
}: {
  userLang: string;
  handleSectionDynamicChange: (sectionName: string) => void;
  selectedSection: string;
}) {
  const contactsRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && selectedSection !== "contacts") {
            console.log("contacts", entry);
            handleSectionDynamicChange("contacts");
          }
        });
      },
      {
        threshold: 1, //Permet à IntersectionObserver de se lancer à partir d'un certain seuil (1 = complétement visible)
      }
    );
    if (contactsRef.current) {
      observer.observe(contactsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [handleSectionDynamicChange, selectedSection]);

  return (
    <Element name="contacts">
      <div className="relative top-1 wave-bg w-full h-16 bg-dDark"></div>
      <section className="flex  flex-col items-center justify-center  text-lShade p-10 min-h-screen bg-dDark">
        <div className="flex items-baseline justify-center">
          <h2
            ref={contactsRef}
            className="text-lShade text-5xl my-10 font-bold p-4"
          >
            Contacts
          </h2>
          {selectedSection === "contacts" && (
            <span className="bg-mBrand w-4 h-4 rounded-full animate-pop"></span>
          )}
        </div>
        <article className="md:w-1/2 self-center">
          <div className="flex flex-col  gap-10 items-center">
            <div className="text-center">
              <h3 className="text-2xl my-4 font-semibold">
                {userLang === "fr-FR" ? "Téléphone :" : "Phone :"}
              </h3>

              <p className="text-xl">07 68 89 89 23</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl my-4 font-semibold">Email :</h3>
              <a
                href="mailto:kevin-lionnet@outlook.fr"
                className="text-xl underline underline-offset-2 hover:text-mBrand "
              >
                kevin-lionnet@outlook.fr
              </a>
            </div>
            <div className="text-center ">
              <h3 className="text-2xl my-4 font-semibold">
                {userLang === "fr-FR" ? "Réseaux :" : "Socials :"}
              </h3>
              <div className="flex flex-row items-center justify-center">
                <a href="https://github.com/Cemus" target="_blank">
                  <GitHubIcon />
                </a>
                <a href="https://linkedin.com/in/kévin-lionnet" target="_blank">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>
    </Element>
  );
}
