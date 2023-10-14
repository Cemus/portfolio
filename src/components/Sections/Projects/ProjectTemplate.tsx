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
  console.log(rightSided);
  image = placeHolder;
  const userLang = navigator.language;

  window.screenX < 500 ? (rightSided = true) : (rightSided = false);
  console.log(window.screenX);
  const links = (
    <div className=" flex flex-col gap-5 p-5 text-dDark items-center bg-dDark">
      <img src={image} alt="placeholder" />
      <a
        href={liveLink}
        className="button bg-mBrand font-bold w-80 h-10 rounded-md p-2 text-center hover:text-lShade hover:w-96 transition-all"
      >
        {userLang === "fr-FR" ? "Voir en direct" : "Watch it live"}
      </a>
      <a
        href={codeLink}
        className="button bg-mBrand font-bold w-80 h-10 rounded-md p-2 text-center hover:text-lShade hover:w-96 transition-all"
      >
        Code
      </a>
    </div>
  );
  return (
    <article className="md:flex md:flex-row md:items-center md:justify-around text-dShade lg:w-2/3 rounded-sm ">
      {rightSided && links}
      <div className="p-5 bg-white ">
        <h3 className="text-2xl my-4 font-semibold">{name}</h3>
        {description.map((desc, index) => {
          return (
            <p key={index} className="my-2">
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
        <div className="flex flex-wrap">
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
