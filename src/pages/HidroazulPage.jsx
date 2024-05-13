import NavbarSectionProducts from "../components/sections/NavbarSectionProducts";
import FooterProducts from "../components/sections/FooterProducts";
import HidroazulProductsList from "../components/sections/HidroazulProductsList";
import HeroProducts from "../components/sectionElements/HeroProducts";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import imgLogo from "../assets/imgs/brands/hidroazulLogo.webp";

export default function HidroazulPage() {
  return (
    <div className="w-full">
      <NavbarSectionProducts />
      <HeroProducts
        heroTitle="Nossa linha de produtos"
        heroImg={imgLogo}
        heroParagraph="Aqui você encontrará tudo o que precisa para produtos  de tratamento para sua piscina."
        alt="Logo da marca da Hidroazul"
      />
      <div className="flex flex-col mx-auto">
        <HidroazulProductsList />
        <BackToTopButton />
        <FloatingWhatsappButton />
        <FooterProducts />
      </div>
    </div>
  );
}
