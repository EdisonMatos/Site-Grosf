import { Link } from "react-scroll";
import mpaLogo from "../../assets/importAssets/Logo.png";
import { Phone, Mail } from "lucide-react";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivUpToDown from "../animation/MotionDivUpToDown";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import whatsappNumber from "../../abstractions/whats";

const whatsappContactLink = `https://wa.me/` + `${whatsappNumber}`;

function Footer() {
  return (
    <footer className="bg-secondary full gap-y-[42px]  text-white font-mainFont text-left text-paragraph3 flex flex-col py-[26px] phone3:py-[48px] justify-between items-center">
      <div className=" w-[88%] max-w-[1110px] flex flex-col gap-y-[42px]  desktop1:flex-row desktop1:justify-between">
        <MotionDivLeftToRight>
          <div className="flex flex-col gap-y-[16px] desktop1:w-auto">
            <img
              alt="Logo MPA Piscinas"
              src={mpaLogo}
              className="w-full h-[115px]"
            ></img>
            <p className="full">Mergulhe na magia desse nosso vasto oceano.</p>
            <div className="flex full gap-x-[8px] items-center">
              <Phone
                size={24}
                aria-label="Ícone de Telefone"
                strokeWidth={1}
                className="text-white"
              />
              <a
                href={whatsappContactLink}
                target="_blank"
                className="hover:underline"
              >
                (11) 4173-1175
              </a>
            </div>
            <div className="flex full gap-x-[8px] items-center">
              <Mail
                size={24}
                aria-label="Ícone de Carta"
                strokeWidth={1}
                className="text-white"
              />
              <p>vendas@grosfestilo.com.br</p>
            </div>
          </div>
        </MotionDivLeftToRight>
        <MotionDivUpToDown>
          <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
            <h1 className="font-medium text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
              A definir.
            </h1>
            <p>A definir.</p>
          </div>
        </MotionDivUpToDown>
        <MotionDivRightToLeft>
          <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
            <h1 className="font-medium text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
              A definir.
            </h1>
            <div className="flex justify-between full">
              <div className="w-[46%] flex flex-col gap-y-[16px] text-paragraph3 font-semibold ">
                <div className="h-[36px] ">
                  <Link
                    to="home"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    href="#"
                  >
                    A definir.
                  </Link>
                </div>
                <div className="h-[36px] ">
                  <Link
                    to="about"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    href="#"
                  >
                    A definir.
                  </Link>
                </div>
                <div className="h-[36px] ">
                  <Link
                    to="products"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    href="#"
                  >
                    A definir.
                  </Link>
                </div>
              </div>
              <div className=" w-[46%] flex flex-col gap-y-[16px] text-paragraph3 font-semibold ">
                <div className="h-[36px] ">
                  <Link
                    to="courses"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    href="#"
                  >
                    A definir.
                  </Link>
                </div>
                <div className="h-[36px] ">
                  <Link
                    to="faq"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    href="#"
                  >
                    A definir.
                  </Link>
                </div>
                <div className="h-[36px] ">
                  <Link
                    to="contact"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-190}
                    href="#"
                  >
                    A definir.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MotionDivRightToLeft>
      </div>

      <div className="w-[88%] max-w-[1110px] h-px bg-white"></div>

      <div className="text-center w-[88%] max-w-[1110px] flex flex-col mb-[48px] phone2:mb-[80px] tablet1:mb-0">
        <MotionDivUpToDown>
          <p className="w-full">
            2025 - A definir. - Todos os direitos reservados
          </p>
          <p>
            <a
              className="transition hover:underline"
              target="_blank"
              href="https://www.paperstreet.com.br"
            >
              {" "}
              Gostaria de ter um site como este? Clique aqui
            </a>
          </p>
        </MotionDivUpToDown>
      </div>
    </footer>
  );
}

export default Footer;
