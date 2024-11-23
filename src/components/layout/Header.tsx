export default function Header({
  userLang,
  selectedSection,
  handleSectionClick,
}: {
  userLang: string;
  selectedSection: string;
  handleSectionClick: (e: React.MouseEvent, section: string) => void;
}) {
  return (
    <header className=" fixed  top-0 backdrop-blur-sm flex flex-col gap-2 md:gap-4 w-[100%] md:flex-row items-center justify-between p-2 md:p-6 bg-dDark bg-opacity-90 z-50 shadow-md">
      <a
        href="/"
        onClick={(e) => handleSectionClick(e, "contacts")}
        className="flex flex-row items-baseline gap-1"
      >
        <div className="text-white font-medium lg:text-5xl text-3xl  ">KL</div>
        <div className="bg-mBrand w-3 h-3 rounded-full"></div>
      </a>

      <nav className="text-white flex justify-center md:justify-end font-bold gap-10 mx-2 text-md md:text-xl">
        <a
          href="/"
          className={`cursor-pointer ${
            selectedSection === "home"
              ? "select-none after:block after:rounded-xl after:relative after:top-1 after:w-3 after:h-3 after:bg-mBrand after:mx-auto after:my-0 after:animate-glimmer animate-none duration-200  "
              : "select-none opacity-60 hover:opacity-90 animate-none duration-200"
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleSectionClick(e, "home");
          }}
        >
          {userLang === "fr-FR" ? "Accueil" : "Home"}
        </a>

        <a
          href="/"
          className={`cursor-pointer ${
            selectedSection === "projects"
              ? "select-none after:block after:rounded-xl after:relative after:top-1 after:w-3 after:h-3 after:bg-mBrand after:mx-auto after:my-0 after:animate-glimmer animate-none duration-200  "
              : "select-none opacity-60 hover:opacity-90 animate-none duration-200"
          }`}
          onClick={(e) => {
            handleSectionClick(e, "projects");
          }}
        >
          {userLang === "fr-FR" ? "Projets" : "Projects"}
        </a>

        <a
          href="/"
          className={`cursor-pointer ${
            selectedSection === "about"
              ? " select-none after:block after:rounded-xl after:relative after:top-1 after:w-3 after:h-3 after:bg-mBrand after:mx-auto after:my-0 after:animate-glimmer animate-none duration-200  "
              : "select-none opacity-60 hover:opacity-90 animate-none duration-200"
          }`}
          onClick={(e) => handleSectionClick(e, "about")}
        >
          {userLang === "fr-FR" ? "Profil" : "About"}
        </a>

        <a
          href="/"
          className={`cursor-pointer ${
            selectedSection === "contacts"
              ? "select-none after:block after:rounded-xl after:relative after:top-1 after:w-3 after:h-3 after:bg-mBrand after:mx-auto after:my-0 after:animate-glimmer animate-none duration-200  "
              : "select-none opacity-60 hover:opacity-90 animate-none duration-200"
          }`}
          onClick={(e) => handleSectionClick(e, "contacts")}
        >
          Contacts
        </a>
      </nav>
    </header>
  );
}
