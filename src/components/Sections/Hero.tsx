import { Element, Link } from "react-scroll";
import pdf from "../../assets/CV Kévin Lionnet 2025.pdf";

export default function Hero({ userLang }: { userLang: string }) {
  return (
    <Element name="home">
      <section className="flex flex-col justify-center items-center text-lShade max-w-[70%] min-h-screen min-w-full gap-10 ">
        <div className="flex flex-col justify-center items-center gap-5 ">
          <div className="flex items-baseline justify-left">
            <h1 className="text-6xl text-lShade px-4 leading-normal">
              {userLang === "fr-FR" ? "Bonjour" : "Hi"} 👋
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline text-3xl gap-1 justify-center">
            <p className=" text-lShade ">
              {userLang === "fr-FR" ? "Je suis " : "I am "}
              <em className="bg-mBrand px-1 text-lShade not-italic rounded-sm">
                Kévin Lionnet
              </em>
              ,
            </p>
            <div className="flex flex-row items-baseline ">
              <p className=" text-lShade px-1 ">
                {userLang === "fr-FR" ? " développeur web" : " web developper"}
              </p>
              <div className="relative bg-mBrand w-2 h-2 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-center">
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className=" bg-lShade  text-dShade p-2 rounded-md font-bold hover:bg-mBrand hover:text-lShade transition-colors"
          >
            {userLang === "fr-FR" ? "Télécharger mon CV" : "Download my resume"}
          </a>
          <Link
            className="cursor-pointer select-none bg-lShade  text-dShade p-2 rounded-md font-bold hover:bg-mBrand hover:text-lShade transition-colors"
            to="projects"
            smooth={true}
            offset={0}
            duration={500}
            spy={true}
          >
            {userLang === "fr-FR" ? "Voir mes projets" : "See my projects"}
          </Link>
        </div>
      </section>
      <div className=" relative wave-bg  w-full h-16 top-1 bg-dDark"></div>
    </Element>
  );
}
