import NavbarSectionProducts from "../components/sections/NavbarSectionProducts";
import FooterProducts from "../components/sections/FooterProducts";
import GencoProductsList from "../components/sections/GencoProductList";
import HeroProducts from "../components/sectionElements/HeroProducts";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import imgLogo from "../assets/imgs/brands/gencoLogo.webp";

export default function GencoPage() {
  return (
    <div className="w-full">
      <NavbarSectionProducts />
      <HeroProducts
        heroTitle="Nossa linha de produtos"
        heroImg={imgLogo}
        heroParagraph="Aqui você encontrará tudo o que precisa para produtos  de tratamento para sua piscina."
        alt="Logo da marca da Genco"
      />
      <div className="flex flex-col mx-auto">
        <GencoProductsList />
        <BackToTopButton />
        <FloatingWhatsappButton />
        <FooterProducts />
      </div>
    </div>
  );
}
