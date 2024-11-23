import { Element } from "react-scroll";
import { GitHubIcon, LinkedInIcon } from "../icones/Icones";
import Indicator from "../others/Indicator";
import { useEffect, useRef, useState } from "react";

export default function Contacts({ userLang }: { userLang: string }) {
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
    <Element name="contacts">
      <div className="relative top-1 wave-bg w-full h-16 bg-dDark"></div>
      <section className="flex  flex-col items-center justify-center  text-lShade p-10 min-h-screen bg-dDark">
        <div className="flex items-baseline justify-center">
          <h2
            ref={sectionRef}
            className="text-lShade text-5xl my-10 font-bold p-4"
          >
            Contacts
          </h2>
          <Indicator isVisible={isVisible} />
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
