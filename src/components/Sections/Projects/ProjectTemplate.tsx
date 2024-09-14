import { lazy, Suspense, useEffect, useState } from "react";
import useResize from "../../../hooks/useResize";

type Technology =
  | "JavaScriptIcon"
  | "TypeScriptIcon"
  | "ReactIcon"
  | "GitIcon"
  | "CssIcon"
  | "NodeIcon"
  | "MongoIcon"
  | "HtmlIcon"
  | "WebpackIcon"
  | "TailwindIcon"
  | "ViteIcon"
  | "SassIcon";

interface ProjectProps {
  name: string;
  liveLink: string;
  codeLink: string;
  description: string[];
  stack: Technology[];
  image: string;
  rightSided: boolean;
}

interface ProjectImageProps {
  image: string;
  name: string;
  userLang: string;
  liveLink: string;
  codeLink: string;
  screenWidth: number;
}

interface ProjectLinksProps {
  userLang: string;
  liveLink: string;
  codeLink: string;
}

const ProjectImage = ({
  image,
  name,
  userLang,
  liveLink,
  codeLink,
  screenWidth,
}: ProjectImageProps) => {
  const mediumWidth = 768;
  const [hoveringProjectImage, setHoveringProjectImage] = useState(
    screenWidth < mediumWidth
  );
  const handleMouseEnter = () => {
    setHoveringProjectImage(true);
  };

  const handleMouseLeave = () => {
    if (screenWidth >= mediumWidth) {
      setHoveringProjectImage(false);
    }
  };

  useEffect(() => {
    if (screenWidth >= mediumWidth) {
      console.log("testo");
      setHoveringProjectImage(false);
    } else {
      console.log("test");
      setHoveringProjectImage(true);
    }
  }, [screenWidth]);

  return (
    <>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img
          onMouseEnter={handleMouseEnter}
          className="md:group-hover:opacity-50 transition-opacity"
          src={image}
          alt={`${name} image`}
        />
        {(hoveringProjectImage || screenWidth < mediumWidth) && (
          <ProjectLinks
            liveLink={liveLink}
            codeLink={codeLink}
            userLang={userLang}
          />
        )}
      </div>
    </>
  );
};

const ProjectLinks = ({ liveLink, codeLink, userLang }: ProjectLinksProps) => {
  return (
    <div className="flex flex-col gap-7 m-2 items-center justify-center md:m-0 md:absolute md:w-full md:h-full md:top-0 md:left-0">
      <a
        href={liveLink}
        target="_blank"
        rel="noreferrer"
        className="button flex items-center justify-center text-xl shadow-dShade shadow-md bg-mBrand font-bold w-80 h-10 rounded-md p-2 hover:text-lShade sm:hover:w-96 transition-all animate-slideFromRight"
      >
        {userLang === "fr-FR" ? "Voir en direct" : "Watch it live"}
      </a>
      <a
        href={codeLink}
        rel="noreferrer"
        target="_blank"
        className="button text-xl flex items-center justify-center shadow-dShade shadow-md bg-mBrand font-bold w-80 h-10 rounded-md p-2 hover:text-lShade sm:hover:w-96 transition-all animate-slideFromLeft"
      >
        GitHub
      </a>
    </div>
  );
};

export default function ProjectTemplate({
  name,
  liveLink,
  codeLink,
  description,
  stack,
  image,
  rightSided,
}: ProjectProps) {
  const userLang = navigator.language;
  const [screenWidth] = useResize();

  if (rightSided === true) {
    screenWidth >= 1440 ? (rightSided = true) : (rightSided = true);
  }
  if (rightSided === false) {
    screenWidth >= 1440 ? (rightSided = false) : (rightSided = true);
  }

  return (
    <article className="md:max-w-xl lg:max-w-3xl xl:max-w-5xl xl:flex  text-lShade rounded-sm">
      {rightSided ? (
        <>
          <div className="group  flex flex-col gap-5 relative p-5 text-dDark  items-center justify-center  xl:max-w-[50%] rounded-sm">
            <ProjectImage
              image={image}
              name={name}
              liveLink={liveLink}
              codeLink={codeLink}
              userLang={userLang}
              screenWidth={screenWidth}
            />
          </div>
          <div className="flex flex-col  justify-around p-5  xl:max-w-[50%]  ">
            <h3 className="text-3xl my-4 font-semibold">{name}</h3>
            {description.map((desc, index) => {
              return (
                <p key={index} className="my-2 leading-relaxed text-xl">
                  {desc}
                </p>
              );
            })}

            <h4 className="text-2xl my-4 font-semibold">
              {userLang === "fr-FR" ? "Technologies" : "Stack"}
            </h4>
            {userLang === "fr-FR" ? (
              <p className="text-xl">
                Dans ce projet, j'ai utilisé les technologies suivantes :
              </p>
            ) : (
              <p className="text-xl">
                In this project, I used the following technologies:
              </p>
            )}
            <div className="flex flex-wrap justify-center">
              {stack.map((tech: Technology) => {
                const DynamicIcon = lazy(() =>
                  import("../../Icones/Icones").then((module) => ({
                    default: module[tech],
                  }))
                );
                return (
                  <Suspense key={tech} fallback={<div>Loading...</div>}>
                    <DynamicIcon />
                  </Suspense>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col  justify-around p-5  xl:max-w-[50%]  ">
            <h3 className="text-3xl my-4 font-semibold">{name}</h3>
            {description.map((desc, index) => {
              return (
                <p key={index} className="my-2 text-justify text-xl">
                  {desc}
                </p>
              );
            })}

            <h4 className="text-2xl my-4 font-semibold">
              {userLang === "fr-FR" ? "Technologies" : "Stack"}
            </h4>
            {userLang === "fr-FR" ? (
              <p className="text-xl">
                Dans ce projet, j'ai utilisé les technologies suivantes :
              </p>
            ) : (
              <p className="text-xl">
                In this project, I used the following technologies:
              </p>
            )}
            <div className="flex flex-wrap justify-center">
              {stack.map((tech: Technology) => {
                const DynamicIcon = lazy(() =>
                  import("../../Icones/Icones").then((module) => ({
                    default: module[tech],
                  }))
                );
                return (
                  <Suspense key={tech} fallback={<div>Loading...</div>}>
                    <DynamicIcon />
                  </Suspense>
                );
              })}
            </div>
          </div>
          <div className="group  flex flex-col gap-5 relative p-5 text-dDark  items-center justify-center  xl:max-w-[50%] rounded-sm">
            <ProjectImage
              image={image}
              name={name}
              liveLink={liveLink}
              codeLink={codeLink}
              userLang={userLang}
              screenWidth={screenWidth}
            />
          </div>
        </>
      )}
    </article>
  );
}
