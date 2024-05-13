import NavbarSectionProducts from "../components/sections/NavbarSectionProducts";
import SodramarProductsList from "../components/sections/SodramarProductsList";
import FooterProducts from "../components/sections/FooterProducts";
import HeroProducts from "../components/sectionElements/HeroProducts";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import imgLogo from "../assets/imgs/brands/sodramarLogo.webp";

export default function SodramarPage() {
  return (
    <div className="w-full">
      <NavbarSectionProducts />
      <HeroProducts
        heroTitle="Nossa linha de acessórios"
        heroImg={imgLogo}
        heroParagraph="Aqui você encontrará tudo o que precisa para produtos  de tratamento para sua piscina."
        alt="Logo da marca da Sodramar"
      />
      <div className="flex flex-col mx-auto">
        <SodramarProductsList />
        <BackToTopButton />
        <FloatingWhatsappButton />
        <FooterProducts />
      </div>
    </div>
  );
}
