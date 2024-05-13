import NavbarSectionProducts from "../components/sections/NavbarSectionProducts";
import DomclorProductsList from "../components/sections/DomClorProductsList";
import HeroProducts from "../components/sectionElements/HeroProducts";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import imgLogo from "../assets/imgs/brands/domclorLogo.webp";
import FooterProducts from "../components/sections/FooterProducts";

export default function DomclorPage() {
  return (
    <div className="w-full">
      <NavbarSectionProducts />
      <HeroProducts
        heroTitle="Nossa linha de produtos"
        heroImg={imgLogo}
        heroParagraph="Aqui você encontrará tudo o que precisa para produtos  de tratamento para sua piscina."
        alt="Logo da marca da Domclor"
      />
      <div className="flex flex-col mx-auto">
        <DomclorProductsList />
        <BackToTopButton />
        <FloatingWhatsappButton />
        <FooterProducts />
      </div>
    </div>
  );
}
