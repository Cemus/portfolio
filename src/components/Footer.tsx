export default function Footer({ userLang }: { userLang: string }) {
  return (
    <footer className=" bg-dDark p-5 text-center ">
      <small className=" text-white">
        {userLang === "fr-FR"
          ? "Merci d'avoir parcouru mon portfolio !"
          : "Thank you for visiting my portfolio!"}
      </small>
    </footer>
  );
}
