import { lazy, Suspense } from "react";

import placeHolder from "../../../assets/bzeignou.jpg";

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
  image = placeHolder;
  const userLang = navigator.language;

  if (rightSided === true) {
    window.innerWidth > 500 ? (rightSided = true) : (rightSided = false);
  }

  const links = (
    <div className=" flex flex-col gap-5 p-5 text-dDark bg-dShade items-center justify-center  xl:max-w-[50%] rounded-sm">
      <img src={image} alt="placeholder" />
      <a
        href={liveLink}
        target="_blank"
        className="button bg-mBrand font-bold w-80 h-10 rounded-md p-2 text-center hover:text-lShade hover:w-96 transition-all"
      >
        {userLang === "fr-FR" ? "Voir en direct" : "Watch it live"}
      </a>
      <a
        href={codeLink}
        target="_blank"
        className="button bg-mBrand font-bold w-80 h-10 rounded-md p-2 text-center hover:text-lShade hover:w-96 transition-all"
      >
        Code
      </a>
    </div>
  );
  return (
    <article className="md:max-w-xl lg:max-w-3xl xl:max-w-5xl xl:flex  text-dShade rounded-sm">
      {rightSided && links}
      <div className="flex flex-col  justify-around p-5 bg-white xl:max-w-[50%]  ">
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
