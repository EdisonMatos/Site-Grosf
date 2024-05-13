import NavbarSectionProducts from "../components/sections/NavbarSectionProducts";
import FooterProducts from "../components/sections/FooterProducts";
import NeoclorProductsList from "../components/sections/NeoclorProductsList";
import HeroProducts from "../components/sectionElements/HeroProducts";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import imgLogo from "../assets/imgs/brands/neoclorLogo.webp";

export default function NeoclorPage() {
  return (
    <div className="w-full">
      <NavbarSectionProducts />
      <HeroProducts
        heroTitle="Nossa linha de produtos"
        heroImg={imgLogo}
        heroParagraph="Aqui você encontrará tudo o que precisa para produtos  de tratamento para sua piscina."
        alt="Logo da marca da Neoclor"
      />
      <div className="flex flex-col mx-auto">
        <NeoclorProductsList />
        <BackToTopButton />
        <FloatingWhatsappButton />
        <FooterProducts />
      </div>
    </div>
  );
}
