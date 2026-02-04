import NavbarSectionProducts from '../components/sections/NavbarSectionProducts'
import FooterProducts from '../components/sections/FooterProducts'
import HeroProducts from '../components/sectionElements/HeroProducts'
import BackToTopButton from '../components/interactives/BackToTopButton'
import FloatingWhatsappButton from '../components/interactives/FloatingWhatsappButton'
import imgLogo from '../assets/imgs/brands/allquimiaLogo.webp'
import AllquimiaProductsList from '../components/sections/AllquimiaProducts'

export default function Allquimia() {
  return (
    <div className="w-full">
      <NavbarSectionProducts />
      <HeroProducts
        heroTitle="Nossa linha de produtos"
        heroImg={imgLogo}
        heroParagraph="Aqui você encontrará tudo o que precisa para produtos  de tratamento para sua piscina."
        alt="Logo da marca da Suall"
      />
      <div className="flex flex-col mx-auto">
        <AllquimiaProductsList />
        <BackToTopButton />
        <FloatingWhatsappButton />
        <FooterProducts />
      </div>
    </div>
  )
}
