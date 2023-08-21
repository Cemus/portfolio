import placeHolder from "../../assets/bzeignou.jpg";
import {
  TypescriptIcon,
  MongoIcon,
  TailwindIcon,
  ViteIcon,
  NodeIcon,
  ReactIcon,
} from "../Icones/Icones";

export default function FirstProject() {
  return (
    <div className="flex flex-row items-center justify-around">
      <div className="text-black flex flex-col gap-5 ">
        <button className="button bg-white font-bold w-[20rem] h-[4rem] rounded-md p-2">
          Watch it live
        </button>
        <button className="button bg-white font-bold w-[20rem] h-[4rem] rounded-md p-2">
          Code
        </button>
      </div>
      <div className="max-w-[50%]">
        <h3 className="text-2xl my-4 font-semibold">Project Name</h3>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          rerum nulla id quisquam animi iusto atque, corrupti veritatis qui.
          Sapiente cupiditate minus distinctio! Repellat voluptatem expedita
          molestiae illum rerum numquam!
        </p>
        <p className=" my-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          rerum nulla id quisquam animi iusto atque, corrupti veritatis qui.
          Sapiente cupiditate minus distinctio! Repellat voluptatem expedita
          molestiae illum rerum numquam!
        </p>
        <img src={placeHolder} alt="placeholder" />
        <h3 className="text-2xl my-4 font-semibold">
          Tech stack used in this project
        </h3>
        <p>In this project, I used the following technologies:</p>
        <div className="flex">
          <ViteIcon />
          <NodeIcon />
          <MongoIcon />
          <ReactIcon />
          <TypescriptIcon />
          <TailwindIcon />
        </div>
      </div>
    </div>
  );
}
