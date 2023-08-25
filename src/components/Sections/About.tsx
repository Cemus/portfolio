import { Element } from "react-scroll";

export default function About() {
  return (
    <Element name="about">
      <section className="flex  flex-col  bg-dDark text-white p-10">
        <div className="flex items-baseline justify-center">
          <h2 className="text-lShade text-5xl mt-10 font-bold p-4">About</h2>
          <span className="bg-mBrand w-4 h-4 rounded-full"></span>
        </div>
        <article className="flex items-center justify-evenly">
          <div className="w-1/2">
            <h3 className="mb-4 text-4xl">Bonjour !</h3>
            <p className="text-xl leading-relaxed mb-2">
              J'ai découvert le développement en faisant des Game Jam me suis
              laissé prendre dans l'engrenage ! Je me suis mis à apprendre
              Python pour ensuite me concentrer sur le développement web par le
              biais, notamment, du site <cite>The Odin Project</cite>.
            </p>
            <p className="text-xl leading-relaxed">
              Je suis toujours ouvert à de nouvelles opportunités pour affiner
              mes compétences et relever de nouveaux défis. Je me pousse à
              évoluer constamment en gardant un oeil sur ce qu'il se fait dans
              le monde du développement pour adapter mes pratiques.
            </p>
          </div>
          <img
            className=" ml-4 max-w-[20%] aspect-square rounded-full"
            src="https://www.presse-citron.net/app/uploads/2022/12/avatar-2-extrait.jpg"
            alt="avatar"
          />
        </article>
      </section>
    </Element>
  );
}
