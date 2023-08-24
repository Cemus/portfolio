import { lazy, Suspense } from "react";

import placeHolder from "../../../assets/bzeignou.jpg";

interface ProjectProps {
  name: string;
  liveLink: string;
  codeLink: string;
  description: string;
  stack: string[];
  image: string;
}

export default function ProjectTemplate({
  name,
  liveLink,
  codeLink,
  description,
  stack,
  image,
}: ProjectProps) {
  image = placeHolder;
  return (
    <article className="flex flex-row items-center justify-around">
      <div className="text-dShade flex flex-col gap-5 ">
        <a
          href={liveLink}
          className="button bg-mBrand font-bold w-[20rem] h-[4rem] rounded-md p-2 text-center"
        >
          Watch it live
        </a>
        <a
          href={codeLink}
          className="button bg-mBrand font-bold w-[20rem] h-[4rem] rounded-md p-2"
        >
          Code
        </a>
      </div>
      <div className="max-w-[50%]">
        <h3 className="text-2xl my-4 font-semibold">{name}</h3>
        <p className="my-2">{description}</p>
        <img src={image} alt="placeholder" />
        <h3 className="text-2xl my-4 font-semibold">
          Tech stack used in this project
        </h3>
        <p>In this project, I used the following technologies:</p>
        <div className="flex">
          {stack.map((tech: string) => {
            switch (tech) {
              case "js":
                if (tech === "js") {
                  const DynamicIcon = lazy(() =>
                    import("../../Icones/Icones").then((module) => ({
                      default: module.JavaScriptIcon,
                    }))
                  );
                  return (
                    <Suspense key={tech} fallback={<div>Loading...</div>}>
                      <DynamicIcon />
                    </Suspense>
                  );
                }
                break;

              default:
                return null;
            }
          })}
        </div>
      </div>
    </article>
  );
}
