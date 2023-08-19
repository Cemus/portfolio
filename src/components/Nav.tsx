import { useState } from "react";

export default function Nav() {
  const [selectedSection, setSelectedSection] = useState<string>("home");
  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
  };
  return (
    <div className=" grid grid-cols-[2fr,1fr] grid-rows-1 p-10">
      <div className="w-1/2"></div>
      <nav className="text-white flex justify-evenly font-bold">
        <ul
          className={`cursor-pointer ${
            selectedSection === "home"
              ? "select-none after:block after:rounded-xl after:w-2 after:h-2 after:bg-white after:mx-auto after:my-0 after:animate-glimmer animate-none duration-250  "
              : "select-none opacity-60 hover:opacity-80 animate-none duration-500 "
          }`}
          onClick={() => handleSectionClick("home")}
        >
          Home
        </ul>

        <ul
          className={`cursor-pointer ${
            selectedSection === "projects"
              ? "select-none after:block after:rounded-xl after:w-2 after:h-2 after:bg-white after:mx-auto after:my-0 after:animate-glimmer animate-none duration-250  "
              : "select-none opacity-60 hover:opacity-90 animate-none duration-500"
          }`}
          onClick={() => handleSectionClick("projects")}
        >
          Projects
        </ul>

        <ul
          className={`cursor-pointer ${
            selectedSection === "about"
              ? "select-none after:block after:rounded-xl after:w-2 after:h-2 after:bg-white after:mx-auto after:my-0 after:animate-glimmer animate-none duration-250  "
              : "select-none opacity-60 hover:opacity-90 animate-none duration-500"
          }`}
          onClick={() => handleSectionClick("about")}
        >
          About
        </ul>

        <ul
          className={`cursor-pointer ${
            selectedSection === "contacts"
              ? "select-none after:block after:rounded-xl after:w-2 after:h-2 after:bg-white after:mx-auto after:my-0 after:animate-glimmer animate-none duration-250  "
              : "select-none opacity-60 hover:opacity-90 animate-none duration-500"
          }`}
          onClick={() => handleSectionClick("contacts")}
        >
          Contacts
        </ul>
      </nav>
    </div>
  );
}
