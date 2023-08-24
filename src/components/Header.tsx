import { useState } from "react";
import { scroller } from "react-scroll";

export default function Header() {
  const [selectedSection, setSelectedSection] = useState<string>("home");
  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
    console.log(section);
    scroller.scrollTo(section, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: 0,
    });
  };
  return (
    <header className=" sticky top-0 backdrop-blur-sm flex items-center justify-between p-5 bg-dDark bg-opacity-70">
      <svg
        className="mx-2"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="50"
        height="50"
        viewBox="0 0 50 50"
      >
        <path
          fill="white"
          d="M 14.181641 5 C 9.1222552 5 5 9.1222552 5 14.181641 L 5 35.818359 C 5 40.877744 9.1222552 45 14.181641 45 L 35.818359 45 C 40.877744 45 45 40.877744 45 35.818359 L 45 14.181641 C 45 9.1222552 40.877744 5 35.818359 5 L 14.181641 5 z M 14.181641 7 L 35.818359 7 C 39.796974 7 43 10.203026 43 14.181641 L 43 35.818359 C 43 39.796974 39.796974 43 35.818359 43 L 14.181641 43 C 10.203026 43 7 39.796974 7 35.818359 L 7 14.181641 C 7 10.203026 10.203026 7 14.181641 7 z M 26.998047 13.033203 C 29.076047 17.189203 30.280688 19.532766 29.304688 25.259766 C 27.078688 23.773766 18.855 17.152 17 15 C 18.336 17.375 22.179625 22.585875 23.515625 23.921875 C 21.140625 22.289875 13.496094 16.277344 13.496094 16.277344 C 13.496094 16.277344 20.027531 26.148281 25.519531 29.488281 C 23.441531 30.156281 18.9295 32.8865 11.0625 28.0625 C 13.0665 30.8085 16.613875 36.317828 25.296875 35.798828 C 28.339875 35.650828 30.193391 34.685578 31.900391 34.017578 C 33.607391 33.349578 35.240391 33.423266 36.650391 35.947266 C 36.947391 33.646266 37.021484 31.493922 34.646484 29.044922 C 34.646484 29.044922 36.994047 20.095203 26.998047 13.033203 z"
        ></path>
      </svg>
      <nav className="text-white flex justify-end font-bold gap-10 mx-2">
        <ul
          className={`cursor-pointer ${
            selectedSection === "home"
              ? "select-none after:block after:rounded-xl after:w-2 after:h-2 after:bg-mBrand after:mx-auto after:my-0 after:animate-glimmer animate-none duration-200  "
              : "select-none opacity-60 hover:opacity-90 animate-none duration-200"
          }`}
          onClick={() => handleSectionClick("home")}
        >
          Home
        </ul>

        <ul
          className={`cursor-pointer ${
            selectedSection === "projects"
              ? "select-none after:block after:rounded-xl after:w-2 after:h-2 after:bg-mBrand after:mx-auto after:my-0 after:animate-glimmer animate-none duration-200  "
              : "select-none opacity-60 hover:opacity-90 animate-none duration-200"
          }`}
          onClick={() => handleSectionClick("projects")}
        >
          Projects
        </ul>

        <ul
          className={`cursor-pointer ${
            selectedSection === "about"
              ? "select-none after:block after:rounded-xl after:w-2 after:h-2 after:bg-mBrand after:mx-auto after:my-0 after:animate-glimmer animate-none duration-200  "
              : "select-none opacity-60 hover:opacity-90 animate-none duration-200"
          }`}
          onClick={() => handleSectionClick("about")}
        >
          About
        </ul>

        <ul
          className={`cursor-pointer ${
            selectedSection === "contacts"
              ? "select-none after:block after:rounded-xl after:w-2 after:h-2 after:bg-mBrand after:mx-auto after:my-0 after:animate-glimmer animate-none duration-200  "
              : "select-none opacity-60 hover:opacity-90 animate-none duration-200"
          }`}
          onClick={() => handleSectionClick("contacts")}
        >
          Contacts
        </ul>
      </nav>
    </header>
  );
}
