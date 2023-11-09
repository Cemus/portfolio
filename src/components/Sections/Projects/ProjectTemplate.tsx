import { lazy, Suspense, useState, useEffect } from "react";
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
  const [width] = useResize();

  const handleProjectButtonDisplay = () => {
    if (width >= 768) {
      setHoveringProjectImage(
        (prevHoveringProjectImage) => !prevHoveringProjectImage
      );
    } else {
      setHoveringProjectImage(true);
    }
  };
  const [hoveringProjectImage, setHoveringProjectImage] = useState(
    !(width >= 768)
  );
  if (rightSided === true) {
    width >= 1440 ? (rightSided = true) : (rightSided = true);
  }
  if (rightSided === false) {
    width >= 1440 ? (rightSided = false) : (rightSided = true);
  }

  useEffect(() => {
    if (width >= 768) {
      setHoveringProjectImage(false);
    } else {
      setHoveringProjectImage(true);
    }
  }, [width]);

  const links = (
    <div className="group  flex flex-col gap-5 relative p-5 text-dDark  items-center justify-center  xl:max-w-[50%] rounded-sm">
      <img
        onMouseEnter={handleProjectButtonDisplay}
        onMouseLeave={handleProjectButtonDisplay}
        className="md:group-hover:opacity-50 transition-opacity "
        src={image}
        alt={`${name} image`}
      />
      {hoveringProjectImage && (
        <div
          onMouseEnter={handleProjectButtonDisplay}
          onMouseLeave={handleProjectButtonDisplay}
          className=" flex flex-col gap-7  items-center justify-center md:absolute md:w-full md:h-full  md:top-0 md:left-0"
        >
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="button shadow-dShade shadow-md bg-mBrand font-bold w-80 h-10 rounded-md p-2 text-center hover:text-lShade sm:hover:w-96 transition-all animate-slideFromRight"
          >
            {userLang === "fr-FR" ? "Voir en direct" : "Watch it live"}
          </a>
          <a
            href={codeLink}
            rel="noreferrer"
            target="_blank"
            className="button shadow-dShade  shadow-md  bg-mBrand font-bold w-80 h-10 rounded-md p-2 text-center hover:text-lShade sm:hover:w-96 transition-all animate-slideFromLeft"
          >
            GitHub
          </a>
        </div>
      )}
    </div>
  );
  return (
    <article className="md:max-w-xl lg:max-w-3xl xl:max-w-5xl xl:flex  text-lShade rounded-sm">
      {rightSided && links}
      <div className="flex flex-col  justify-around p-5  xl:max-w-[50%]  ">
        <h3 className="text-2xl my-4 font-semibold">{name}</h3>
        {description.map((desc, index) => {
          return (
            <p key={index} className="my-2 text-justify">
              {desc}
            </p>
          );
        })}

        <h4 className="text-xl my-4 font-semibold">
          {userLang === "fr-FR" ? "Technologies" : "Stack"}
        </h4>
        {userLang === "fr-FR" ? (
          <p>Dans ce projet, j'ai utilisé les technologies suivantes :</p>
        ) : (
          <p>In this project, I used the following technologies:</p>
        )}
        <div className="flex flex-wrap justify-center ">
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
      {!rightSided && links}
    </article>
  );
}
