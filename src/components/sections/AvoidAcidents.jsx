import SectionHeader from "../sectionElements/SectionHeader";
import imgPastilhaCloro from "../../assets/imgs/avoidAccidents/pastilhaCloro.jpg";
import resgateAcidente from "../../assets/imgs/avoidAccidents/resgateAcidente.jpg";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import React, { useState } from "react";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { MoveRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "react-image-gallery/styles/css/image-gallery.css";
import Button from "../interactives/Button";
import ImagesGallery2Slides from "../interactives/ImagesGallery2Slides";
import ImagesGallery3Slides from "../interactives/ImagesGallery3Slides";
import slide1 from "../../assets/imgs/avoidAccidents/slide1.webp";
import slide2 from "../../assets/imgs/avoidAccidents/slide2.webp";
import slide3 from "../../assets/imgs/avoidAccidents/slide3.webp";
import slide4 from "../../assets/imgs/avoidAccidents/slide4.webp";

import Buttons from "../interactives/Buttons";
import whatsappNumber from "../../abstractions/whats";
const whatsappContactLink = `https://wa.me/` + `${whatsappNumber}`;

export default function AboutUs() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const onClick = () => {
    setModalTitle(
      "Negócios corporativos x meio ambiente. É possível uma convivência pacífica?",
    );

    setVisible(true);
  };

  return (
    <div className="flex justify-center w-full bg-quinary" id="avoidAcident">
      <div className="font-mainFont w-[88%] max-w-[1110px] pb-[8px] pt-[26px] phone3:pt-[48px] tablet1:pb-0 ">
        <SectionHeader
          sectionHeaderTitleSecond="Atuação responsável"
          sectionHeaderDescription=""
        />
        <div className=" desktop1:flex desktop1:flex-row-reverse desktop1:justify-between desktop1:pb-[54px] desktop3:pb-[48px]">
          <div className="desktop1:w-[40%] desktop1:pt-[15px]">
            <MotionDivRightToLeft>
              <ImagesGallery3Slides
                slide1={slide1}
                slide2={slide2}
                slide3={slide3}
                slide4={slide4}
              />
            </MotionDivRightToLeft>
          </div>

          <div className="desktop1:w-[48.5%] desktop3:w-[46.3%]">
            <MotionDivLeftToRight>
              <h1 className="text-secondary flex items-center phone1:w-[100%] phone1:font-medium phone1:text-title2 phone3:text-title2 phone1:pb-[10px] tablet1:text-title2 desktop1:text-title4">
                Negócios corporativos x meio ambiente. É possível uma
                convivência pacífica?
              </h1>

              <div className="text-quaternary phone1:w-[100%] phone1:font-normal phone1:text-paragraph3 phone1:leading-[21px] desktop3:w-[100%] text-justify">
                <p className="mb-4">
                  A resposta é sim, aprendemos nas últimas décadas que é
                  possível obter maior lucratividade quando se respeita leis e
                  práticas ambientais. Nosso planeta tem pressa, não é possível
                  esperar, amanhã é agora no nosso planeta!
                </p>

                <MotionDivDownToUp>
                  <Buttons
                    onClick={onClick}
                    name="Continue lendo"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-corner-down-right-icon lucide-corner-down-right"
                        aria-label="Continue lendo"
                      >
                        <polyline points="15 10 20 15 15 20" />
                        <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                      </svg>
                    }
                  />
                </MotionDivDownToUp>
              </div>
            </MotionDivLeftToRight>
          </div>
        </div>
      </div>
      <div>
        <Dialog
          header={modalTitle}
          visible={visible}
          onHide={() => setVisible(false)}
          style={{ width: "90vw", maxWidth: "800px" }}
          modal
        >
          <div className="text-paragraph3" style={{ textAlign: "justify" }}>
            <p>
              Nesses mais de 30 anos de operação ininterrupta, nossa empresa tem
              se dedicado e operado com o que há de mais sagrado e importante no
              nosso planeta, “a água”! Sagrado porque é fonte de vida,
              importante porque mantém a vida. Toda água pode ser recuperada se
              tratada adequadamente e esse é o grande desafio.
            </p>
            <br />
            <p>
              Água servida, água barrenta, água contaminada, água de reuso, água
              de rios e lagos, água suja, essa tem sido nossa luta constante
              embora não seja nossa atividade fim.
            </p>{" "}
            <br />
            <p>
              Recuperar e nunca jogar fora águas de piscinas, essa sim é a nossa
              principal atividade e foi com esse objetivo que nossa empresa foi
              criada.
            </p>
            <br />
            <p>
              Nossa luta incessante, tem sido no sentido de adotar práticas de
              atuação responsável que unem em um único tripé, ambiente
              corporativo, rentabilidade e sustentabilidade.
            </p>
            <br />
            <p>
              Conheça os projetos que já executamos e os projetos previstos para
              serem executados futuramente, todos esses projetos têm em comum o
              mesmo objetivo, contribuir para a melhoria do meio ambiente, vamos
              lá:
            </p>
            <br />
            <p>
              Durante a reforma e readequação do nosso edifício para receber as
              instalações da nossa empresa, nossa nova sede passou por profundas
              transformações, tomamos o cuidado de reservar uma área verde de
              aproximadamente 60m² onde formamos uma área de jardinagem que
              inclui flores de várias espécies e algumas árvores frutíferas de
              pequeno porte como mamão, laranja, limão, amora, mexerica entre
              outras.
            </p>
            <br />
            <p>
              Construímos um reservatório com capacidade para armazenar 26000 L
              de água proveniente da chuva que é bastante abundante na nossa
              região durante o período do verão, essa água é distribuída por uma
              rede com 4 pontos espalhados estrategicamente por várias partes do
              edifício e serve para lavar veículos da nossa frota, lavar
              quintais e calçadas, nosso estacionamento entre outros.Como se
              trata de rede pressurizada, qualquer dos pontos quando abertos,
              aciona a bomba principal e jorra água em abundância para o
              cumprimento do objetivo principal.
            </p>
            <br />
            <p>
              Instalamos lixeiras para coleta de recicláveis e lixo orgânico
              foram instaladas em vários pontos do novo espaço, o objetivo
              principal foi a coleta interna dos materiais recicláveis
              separadamente do lixo orgânico a fim de facilitar sua seleção
              quando este chega ao ponto de descarte.
            </p>
            <br />
            <p>
              No ano de 2020 abolimos de forma definitiva com o uso de
              utensílios descartáveis na nossa empresa e adotamos a utilização
              de utensílios reutilizáveis no nosso dia a dia, são pratos,
              talheres, copos para água e café, taças, canecas, jarras entre
              outros, com essa ação deixamos de descartar anualmente na natureza
              cerca de 20 mil copos grandes e pequenos entre outros utensílios,
              e isso nos enche de orgulho.
            </p>
            <br />
            <p>
              Para o futuro mas a curto prazo, pois já está em fase de estudo,
              estaremos implantando uma usina fotovoltaica para geração de
              energia elétrica, a usina funcionará como uma espécie de fazenda
              solar e a sua capacidade instalada será suficiente para gerar toda
              a energia consumida em nossos processos diariamente, dessa forma
              nos tornarmos auto sustentáveis também no consumo de energia
              elétrica, esse será um dos mais importantes passos que nossa
              empresa estará dando no sentido de contribuir para um planeta
              melhor e mais sustentável, porém ainda não será esse o mais
              importante de todos.
            </p>
            <br />
            <p>
              Como projeto de longo prazo, temos a substituição gradativa da
              nossa atual frota de veículos utilitários movidos a diesel, um
              combustível altamente poluente, por veículos movidos 100% a
              energia elétrica produzida em nossa usina fotovoltaica.
            </p>
            <br />
            <p>
              Para que esse projeto seja executado ainda dependemos de fatores
              alheios à nossa vontade ou nossa ação, um deles é que as
              montadoras consigam a médio prazo aumentar substancialmente a
              autonomia desses modernos veículos, um processo ainda demorado mas
              que a qualquer momento pode acontecer.
            </p>
            <br />
            <p>
              Esse sim será o mais ambicioso e o mais importante projeto que
              será implantado em nossa empresa, quando tudo isso estiver
              operando teremos a certeza de que nossa empresa estará preparada
              para o futuro, o futuro da energia limpa, o futuro da auto
              suficiência em água e energia, um futuro sustentável do ponto de
              vista de energia e utilização de água servida.
            </p>
            <br />
            <p className="my-[20px]">Quer saber mais? Clique abaixo 👇</p>
            <div>
              <Buttons
                href={whatsappContactLink}
                name="WhatsApp"
                icon={<FaWhatsapp className="size-[25px]" />}
              />
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
