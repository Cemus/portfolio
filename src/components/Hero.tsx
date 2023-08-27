import { Element } from "react-scroll";

export default function Hero() {
  return (
    <Element name="home">
      <section className="flex flex-col justify-center text-white max-w-[70%] min-h-screen min-w-full gap-5">
        <div className="flex items-baseline justify-left">
          <h1 className="text-5xl text px-4 leading-normal md:text-6xl">
            Kévin est un développeur front-end français
          </h1>
          <span className="bg-mBrand w-4 h-4 rounded-full"></span>
        </div>
        <p className="text-2xl opacity-80 px-4">
          Il construit des expériences de k-lité.
        </p>
      </section>
    </Element>
  );
}
