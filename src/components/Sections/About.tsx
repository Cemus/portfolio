import { Element } from "react-scroll";

export default function About() {
  return (
    <Element name="about">
      <section className="flex  flex-col  bg-dDark text-white p-10">
        <div className="flex items-baseline justify-center">
          <h2 className="text-lShade text-5xl mt-10 font-bold p-4">About</h2>
          <span className="bg-mBrand w-4 h-4 rounded-full"></span>
        </div>
        <div className="flex items-center justify-evenly">
          <div className="w-1/2">
            <p className="mb-1 text-4xl">Bonjour, je m'appelle Kévin !</p>
            <p className="text-xl">
              Développeur en herbe, je suis toujours ouvert à de nouvelles
              opportunités pour affiner mes compétences et relever de nouveaux
              défis. Je me pousse à évoluer constamment en gardant un oeil sur
              ce qu'il se fait dans le monde du développement pour adapter mes
              pratiques.
            </p>
          </div>
          <img
            className=" ml-4 max-w-[20%] aspect-square rounded-full"
            src="https://www.presse-citron.net/app/uploads/2022/12/avatar-2-extrait.jpg"
            alt="avatar"
          />
        </div>
      </section>
    </Element>
  );
}
