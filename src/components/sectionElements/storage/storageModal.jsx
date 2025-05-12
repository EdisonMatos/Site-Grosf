import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { MoveRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "react-image-gallery/styles/css/image-gallery.css";
import Button from "../../interactives/Button";
import Buttons from "../../interactives/Buttons";
import whatsappNumber from "../../../abstractions/whats";

const whatsappContactLink = `https://wa.me/` + `${whatsappNumber}`;

export default function StorageModal() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const titleModal = "Estocagem de armazenamento!";

  return (
    <div>
      <Buttons
        onClick={() => setVisible(true)}
        className="mt-6 mb-8 desktop1:mb-0"
        name="Saiba mais"
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
            class="lucide lucide-corner-down-right-icon lucide-corner-down-right"
          >
            <polyline points="15 10 20 15 15 20" />
            <path d="M4 4v7a4 4 0 0 0 4 4h12" />
          </svg>
        }
      />

      <Dialog
        header={titleModal}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "90vw", maxWidth: "800px" }}
        modal
      >
        <div style={{ textAlign: "justify" }}>
          <p>
            Veja abaixo dicas e orientações para armazenagem correta dos
            produtos para piscinas que ficarão por alguns dias no almoxarifado
            da sua loja.
          </p>
          <br />
          <p>
            Via de regra, todo produto químico, inclusive aqueles utilizados no
            tratamento diário de piscinas, devem ser armazenados em lugar seco e
            fresco totalmente livre de umidade, fungos ou mofo.
          </p>
          <br />
          <p>
            No caso dos produtos de piscinas os cuidados com a estocagem precisa
            seguir algumas regras básicas, os cuidados precisam ser redobrados,
            pois são produtos usados diariamente por profissionais do ramo como
            balconistas, estoquistas entre outros, mas às vezes são manuseados
            por pessoas sem o conhecimento necessário dos cuidados que precisam
            ter com esse procedimento.
          </p>
          <br />
          <p>
            Alguns produtos usados no tratamento de águas de piscinas são
            considerados perigoso e requer bastante atenção, os cloros
            granulados por exemplo são corrosivos, sua classificação de risco é
            o 5.1 mas você precisa prestar atenção no princípio ativo que compõe
            o produto, o hipoclorito de cálcio, embora seja cloro seu princípio
            ativo é o Hipoclorito de cálcio, já os Dicloros tem um princípio
            ativo que é o Dicloro Cianureto, esses dois caras não combinam,
            portanto os dois são cloros, possuem a mesma classificação de risco
            mas não podem ser armazenados juntos; precisam serem armazenados
            separadamente por conta dos diferentes princípios ativo utilizado na
            sua fabricação.
          </p>
          <br />
          <p>
            <strong>
              Nota: produtos com diferentes graus de risco não podem serem
              armazenados juntos.
            </strong>
          </p>
          <br />
          <p>
            Produtos não perigosos, podem ser armazenados junto com outros
            produtos pq se misturados não causam danos, mas via de regra é
            melhor que também fiquem separados dos produtos perigosos por conta
            de transtorno logístico que podem causar se misturados e também para
            separação manual dos pedidos.
          </p>
          <br />
          <p>
            Muretas de contenção devem ser instaladas por toda a área de
            armazenagem separando os produtos pelo grau de periculosidade que
            representam. Em caso de vazamento o produto fica confinado nesse
            espaço evitando o vazamento para a rede pluvial e a consequente
            contaminação do meio ambiente. Essas muretas de contenção devem ter
            20cm de altura x 10cm de largura e devem ser pintadas na cor branca.
          </p>
          <br />
          <p>
            Olhar sempre na embalagem qual é o princípio ativo de cada produtos,
            ela traz essas informações mais o símbolo e o grau de periculosidade
            do produto, produtos não perigosos a rigor são sinalizados com um
            símbolo mais a descrição “produto não perigoso”.
          </p>
          <br />
          <p>
            Corredor de segregação devem ser instalados nos intervalos entre os
            produtos evitando assim a mistura de ambos em casos de acidentes
            bastante comuns como o tombamento das pilhas ou queda individual de
            produtos por ocasião do manuseio pra separação de pedidos por
            exemplo, esses corredores precisam ter no mínimo 0,80 mts de largura
            essa é a medida ideal porém podem ter mais que isso a depender da
            sua disponibilidade, 1,20 mts por exemplo fica bem bacana.
          </p>
          <br />
          <p>
            Estrados de plástico com altura mínima de 5,0 cm deverão ser
            utilizados na base do piso onde ficarão os produtos armazenados a
            fim de deixar espaço suficiente entre o estrado e o piso para o
            produto se espalhar por baixo do mesmo em caso de acidente evitando
            sua concentração em um mesmo local.
          </p>
          <br />
          <p>
            Nunca utilize para esse fim estrados de madeira como pallets,
            caibros, ripas, tábuas, compensados e madeirites por exemplo, em
            caso de acidente esse material poderá ser descartado na natureza
            levando consigo a contaminação para o meio ambiente.
          </p>
          <br />
          <p>
            Siga corretamente a orientação do fabricante na questão do
            empilhamento dos produtos no seu armazém, as caixas têm capacidades
            diferentes de suporte de peso, isso vai de fabricante para
            fabricantes, os baldes também seguem a mesma orientação mas via de
            regra é recomendado empilhar de 4 a 5 por pilha.
          </p>
          <br />
          <br />
          <Buttons
            type=""
            href={whatsappContactLink}
            name="WhatsApp"
            icon={<FaWhatsapp className="size-[25px]" />}
          />
        </div>
      </Dialog>
    </div>
  );
}
