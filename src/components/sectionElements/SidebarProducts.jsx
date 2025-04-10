import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export default function SidebarProducts({ showSidebar }) {
  const handleLinkClick = (sectionId, offset) => {
    setTimeout(() => {
      const sectionTop = document.getElementById(sectionId).offsetTop + offset;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div
      className={`sidebar transition-transform transform ${
        showSidebar ? "animate-slide-down" : "animate-slide-up"
      }`}
    >
      <div className="mx-auto w-[88%] max-w-[1110px] tablet2:hidden">
        <div className="flex h-auto px-12 py-6 bg-white font-mainFont">
          <div className="overflow-y-auto">
            <ul className="text-black phone2:text-paragraph5 phone3:text-title1 tablet1:text-title2">
              <Link
                to="/"
                onClick={() => handleLinkClick("home", 0)}
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <li className="mb-2">
                  <span className="hover:text-primary">Início</span>
                </li>
              </Link>
              <Link
                to="/"
                onClick={() => handleLinkClick("about", -70)}
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-320}
              >
                <li className="mb-2">
                  <span className="hover:text-primary">Sobre Nós</span>
                </li>
              </Link>
              <Link
                to="/"
                onClick={() => handleLinkClick("products", -70)}
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-320}
              >
                <li className="mb-2">
                  <span className="hover:text-primary">
                    Produtos e Acessórios
                  </span>
                </li>
              </Link>
              <Link
                to="/"
                onClick={() => handleLinkClick("courses", -70)}
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-340}
              >
                <li className="mb-2">
                  <span className="hover:text-primary">Cursos e Palestras</span>
                </li>
              </Link>
              <Link
                to="/"
                onClick={() => handleLinkClick("faq", -70)}
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-340}
              >
                <li className="mb-2">
                  <span className="hover:text-primary">
                    Perguntas Frequentes
                  </span>
                </li>
              </Link>
              <Link
                to="/"
                onClick={() => handleLinkClick("contact", -190)}
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-450}
              >
                <li className="mb-2">
                  <span className="hover:text-primary">Contato</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

SidebarProducts.propTypes = {
  showSidebar: PropTypes.bool.isRequired,
};
