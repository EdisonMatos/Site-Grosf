import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function ListGroup() {
  const [scrolling, setScrolling] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSubMenu = (show) => {
    setShowSubMenu(show);
  };

  return (
    <ul
      className={`h-14 my-auto flex items-center justify-end tablet1:items-center tablet1:flex-wrap tablet1:gap-2 tablet2:gap-4 desktop2:gap-8 w-full font-semibold text-paragraph3 font-poppins ${
        scrolling ? "" : "text-white transition-color duration-200"
      }`}
    >
      <li className="transition group">
        <Link
          to="home"
          className="relative cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          href="#"
        >
          <span className={scrolling ? "hover:text-primary" : ""}>INÍCIO</span>
          <div
            className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              scrolling ? "bg-primary" : "bg-white"
            }`}
          ></div>
        </Link>
      </li>
      <li className="transition group">
        <Link
          to="about"
          className="relative cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          href="#"
        >
          <span className={scrolling ? "hover:text-primary" : ""}>
            SOBRE NÓS
          </span>
          <div
            className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              scrolling ? "bg-primary" : "bg-white"
            }`}
          ></div>
        </Link>
      </li>
      <li>
        <button
          className="relative transition group"
          onMouseEnter={() => toggleSubMenu(true)}
          onMouseLeave={() => toggleSubMenu(false)}
        >
          <Link
            to="products"
            className="relative py-4 cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            href="#"
          >
            <span
              className={`inline-block ${
                scrolling ? "hover:text-primary" : ""
              }`}
            >
              PRODUTOS E ACESSÓRIOS
            </span>
          </Link>
          <div
            className={`animate-${
              showSubMenu ? "fade-in" : "fade-out"
            } duration-1000`}
          >
            {showSubMenu && (
              <ul className="absolute py-3 mt-3 uppercase transform -translate-x-1/2 bg-white rounded-lg shadow-2xl w-52 font-mainFont left-1/2">
                <li>
                  <a
                    href="/hth"
                    className="block w-[80%] mx-auto px-4 py-2 text-center text-tertiary transition duration-500 border-b cursor-pointer hover:text-primary hover:bg-quinary border-neutral-300"
                  >
                    HTH
                  </a>
                </li>
                <li>
                  <a
                    href="/genco"
                    className="block w-[80%] mx-auto px-4 py-2 text-center text-tertiary transition duration-500 border-b cursor-pointer hover:text-primary hover:bg-quinary border-neutral-300"
                  >
                    Genco
                  </a>
                </li>
                <li>
                  <a
                    href="/neoclor"
                    className="block w-[80%] mx-auto px-4 py-2 text-center text-tertiary transition duration-500 border-b cursor-pointer hover:text-primary hover:bg-quinary border-neutral-300"
                  >
                    Neoclor
                  </a>
                </li>
                <li>
                  <a
                    href="/hidroazul"
                    className="block w-[80%] mx-auto px-4 py-2 text-center text-tertiary transition duration-500 border-b cursor-pointer hover:text-primary hover:bg-quinary border-neutral-300"
                  >
                    Hidroazul
                  </a>
                </li>
                <li>
                  <a
                    href="/domclor"
                    className="block w-[80%] mx-auto px-4 py-2 text-center text-tertiary transition duration-500 border-b cursor-pointer hover:text-primary hover:bg-quinary border-neutral-300"
                  >
                    Domclor
                  </a>
                </li>
                <li>
                  <a
                    href="/suall"
                    className="block w-[80%] mx-auto px-4 py-2 text-center text-tertiary transition duration-500 border-b cursor-pointer hover:text-primary hover:bg-quinary border-neutral-300"
                  >
                    Suall
                  </a>
                </li>
                <li>
                  <a
                    href="/sodramar"
                    className="block w-[80%] mx-auto px-4 py-2 text-center text-tertiary transition duration-500 border-b cursor-pointer hover:text-primary hover:bg-quinary border-neutral-300"
                  >
                    Sodramar
                  </a>
                </li>
                <li>
                  <a
                    href="/netuno"
                    className="block w-[80%] mx-auto px-4 py-2 text-center text-tertiary transition duration-500 cursor-pointer hover:text-primary hover:bg-quinary"
                  >
                    Netuno
                  </a>
                </li>
              </ul>
            )}
          </div>
        </button>
      </li>
      <li className="transition group">
        <Link
          to="courses"
          className="relative cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          href="#"
        >
          <span className={scrolling ? "hover:text-primary" : ""}>
            CURSOS E PALESTRAS
          </span>
          <div
            className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              scrolling ? "bg-primary" : "bg-white"
            }`}
          ></div>
        </Link>
      </li>
      <li className="transition group">
        <Link
          to="faq"
          className="relative cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          href="#"
        >
          <span className={scrolling ? "hover:text-primary" : ""}>
            PERGUNTAS FREQUENTES
          </span>
          <div
            className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              scrolling ? "bg-primary" : "bg-white"
            }`}
          ></div>
        </Link>
      </li>
      <li className="transition group">
        <Link
          to="contact"
          className="relative cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-190}
          href="#"
        >
          <span className={scrolling ? "hover:text-primary" : ""}>CONTATO</span>
          <div
            className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              scrolling ? "bg-primary" : "bg-white"
            }`}
          ></div>
        </Link>
      </li>
    </ul>
  );
}
