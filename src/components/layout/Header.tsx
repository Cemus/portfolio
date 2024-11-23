import { Link } from "react-scroll";

export default function Header({ userLang }: { userLang: string }) {
  const activeClass = `cursor-pointer select-none after:block after:rounded-xl after:relative after:top-1 after:w-3 after:h-3 after:bg-mBrand after:mx-auto after:my-0 after:animate-glimmer animate-none duration-200 `;
  const inactiveClass = `cursor-pointer select-none opacity-60 hover:opacity-90 animate-none duration-200
`;

  return (
    <header className=" fixed  top-0 backdrop-blur-sm flex flex-col gap-2 md:gap-4 w-[100%] md:flex-row items-center justify-between p-2 md:p-6 bg-dDark bg-opacity-90 z-50 shadow-md">
      <a href="/" className="flex flex-row items-baseline gap-1">
        <div className="text-white font-medium lg:text-5xl text-3xl  ">KL</div>
        <div className="bg-mBrand w-3 h-3 rounded-full"></div>
      </a>

      <nav className="text-white flex justify-center md:justify-end font-bold gap-10 mx-2 text-md md:text-xl">
        <Link
          activeClass={activeClass}
          className={inactiveClass}
          to="home"
          smooth={true}
          offset={0}
          duration={500}
          spy={true}
        >
          {userLang === "fr-FR" ? "Accueil" : "Home"}
        </Link>

        <Link
          activeClass={activeClass}
          className={inactiveClass}
          to="projects"
          smooth={true}
          offset={0}
          duration={500}
          spy={true}
        >
          {userLang === "fr-FR" ? "Projets" : "Projects"}
        </Link>

        <Link
          activeClass={activeClass}
          className={inactiveClass}
          to="about"
          smooth={true}
          offset={0}
          duration={500}
          spy={true}
        >
          {userLang === "fr-FR" ? "Profil" : "About"}
        </Link>

        <Link
          activeClass={activeClass}
          className={inactiveClass}
          to="contacts"
          smooth={true}
          offset={0}
          duration={500}
          spy={true}
        >
          Contacts
        </Link>
      </nav>
    </header>
  );
}
