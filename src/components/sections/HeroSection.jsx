import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import WhatsAppIcon from "../../assets/importAssets/WhatsAppIcon.webp";
import ImagesGalleryHero from "../interactives/ImagesGalleryHero";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
// import slide1 from "../../assets/banners/hero/slide1.jpg";
// import slide2 from "../../assets/banners/hero/slide2.jpg";
// import slide3 from "../../assets/banners/hero/slide3.jpg";
// import slide4 from "../../assets/banners/hero/slide4.jpg";
// import slide5 from "../../assets/banners/hero/slide5.jpg";
// import slide6 from "../../assets/banners/hero/slide6.jpg";
// import slide7 from "../../assets/banners/hero/slide7.jpg";
// import slide8 from "../../assets/banners/hero/slide8.jpg";
import bgImage from "../../assets/importAssets/bg2.jpg";
import { FaWhatsapp } from "react-icons/fa";

import whatsappNumber from "../../abstractions/whats";
import Buttons from "../interactives/Buttons";

const whatsappContactLink = `https://wa.me/` + `${whatsappNumber}`;

export default function HeroSection() {
  return (
    <div className="font-mainFont " id="home">
      <div
        className="relative w-full bg-center bg-cover"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className="absolute inset-0 z-0 bg-black/50" />

        <div className="relative z-10 flex items-center w-full text-white justify-evenly">
          {" "}
          <div className="w-full text-white justify-evenly">
            <div className="h-40 desktop3:h-46" />
            <div className="flex flex-col desktop1:flex-row mx-auto mb-[40px] w-[88%] max-w-[1110px] items-center gap-10 tablet2:gap-14 desktop3:gap-20">
              <div className="desktop1:w-[650px] flex flex-col gap-8">
                <MotionDivLeftToRight>
                  <div className="font-black leading-none text-center desktop1:text-left text-title3 phone1:text-title5 phone3:text-title6 tablet1:text-title7 desktop1:text-[40px]">
                    <h1>Seja bem vindo ao mundo Grosfestilo!</h1>
                  </div>
                </MotionDivLeftToRight>
                <MotionDivLeftToRight>
                  <div className="text-center desktop1:text-left phone1:w-full phone1:font-medium phone1:text-paragraph4">
                    <p>
                      Nossos profissionais são preparados para atendê-lo de
                      forma objetiva, técnica, transparente e humanizada, siga
                      navegando e surpreenda-se!
                      <br />
                    </p>
                  </div>
                </MotionDivLeftToRight>
                <div className="w-full phone2:w-full tablet2:w-auto">
                  <MotionDivLeftToRight>
                    <div className="flex justify-center w-full desktop1:justify-start">
                      <Buttons
                        type=""
                        href={whatsappContactLink}
                        name="WhatsApp"
                        icon={<FaWhatsapp className="size-[25px]"/>}
                      />
                      {/* <button
                        onClick={() =>
                          window.open(whatsappContactLink, "_blank")
                        }
                        className="flex flex-row items-center justify-around w-auto h-16 transition rounded-[40px] p-6 bg-primary hover:bg-blue-600"
                      >
                        <div className="flex items-center p-4 text-center">
                          <img
                            src={WhatsAppIcon}
                            className="h-[36px] w-[36px] mr-[24px]"
                            alt="WhatsApp Icon"
                          />
                          <p className="flex items-center leading-none text-white text-title1">
                            Fale com um consultor
                          </p>
                        </div>
                      </button> */}
                    </div>
                  </MotionDivLeftToRight>
                </div>
              </div>
              <div className="desktop1:w-[510px]  desktop1:h-[350px] flex items-center">
                {/* <MotionDivDownToUp>
                  <ImagesGalleryHero slide1={slide1} slide2={slide2} />
                </MotionDivDownToUp> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
