import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { FaWhatsapp } from "react-icons/fa";
import "react-image-gallery/styles/css/image-gallery.css";
import Buttons from "../../interactives/Buttons";
import whatsappNumber from "../../../abstractions/whats";
import BookAccordion from "../../interactives/Book";

const whatsappContactLink = `https://wa.me/` + `${whatsappNumber}`;

export default function AboutModal() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const chapters = [
    {
      title: "Capítulo 1",
      content: (
        <div>
          <p className="text-justify">
            {" "}
            No dia 6 de janeiro do ano de 1979, por volta de 6h da manhã,
            desembarcava na rodoviária Júlio Prestes no centro da capital
            paulista, trazido por uma tia, um jovem migrante paranaense com
            apenas 17 anos de idade.
            <br />
            <br />
            Trajava calça e camisa bastante desbotadas pelo uso intenso na lida
            diária lá na roça, nos pés um par de chinelos com solado também
            desgastados, no ombro esquerdo um embornal, uma espécie de sacola
            funda e estreita feita de sobras de tecidos de costura com uma alça
            comprida que lhe servia como apoio ao ombro.
            <br />
            <br />
            Bastante utilizado na roça, esse utensílio caipira servia
            principalmente para levar comida para os trabalhadores nas lavouras
            de café, mas o embornal que trazia, sua única bagagem de mão,
            guardava dentro dele apenas alguns poucos pertences, já o coração
            desembarca na metrópole cheio de esperança e fé de vencer um dia, e
            ganhar dinheiro para ajudar os pais e irmãos que por lá ficaram.
          </p>
          <br />
          <br />
        </div>
      ),
    },
    {
      title: "Capítulo 2",
      content: (
        <div>
          <p className="text-justify">
            {" "}
            Logo após o desembarque, seus olhos brilharam ao olhar para a
            cobertura colorida da linda rodoviária, composta por milhares de
            pequenos quadrados acrílico com fundo ligeiramente ovalado no
            formato de diamante que com várias cores cobriam o teto e desciam em
            forma de “L” invertido de cima para baixo por cerca de mais de um
            metro nas laterais daquela gigantesca edificação.
          </p>
          <br />
          <p className="text-justify">
            {" "}
            Nunca havia visto antes algo parecido, silencioso observava um tanto
            assustado o movimento de pessoas e veículos que iam e vinham naquele
            horário por aquelas estreitas ruas e isso o deixava um tanto
            apreensivo e pensativo.
          </p>
          <br />
        </div>
      ),
    },
    {
      title: "Capítulo 3",
      content: (
        <div>
          <p className="text-justify">
            {" "}
            Pega então sua pouca bagagem, se enche de esperança foco e fé e
            promete a si mesmo com o coração cheio de alegria e entusiasmo de um
            dia ser dono do seu próprio negócio, a vida anda, o tempo passa
            rápido e a promessa passa a ser perseguida como se fosse a única
            missão a ser cumprida.
          </p>
          <br />
          <p className="text-justify">
            Tão logo chegou foi vai morar provisoriamente com a mesma tia que o
            trouxera, a sua saudosa e querida Tia Tereza (in memoriam) que nesse
            momento passou a ser a sua mãe nº 4 já que antes disso, havia morado
            com sua mãe biológica, Dona Zina a nº 1 (in memoriam) e mais 2 Tias
            diferentes, a Tia Quita a nº 2 e a Tia Nhá a nº 3 (todas in
            memoriam).
          </p>
          <br />
        </div>
      ),
    },
    {
      title: "Capítulo 4",
      content: (
        <div>
          <p className="text-justify">
            Dois dias após sua chegada, começou trabalhar numa padaria como
            balconista ao lado de um tio muito querido, ali conheceu seu Moisés,
            um funcionário antigo que ensinou a ele tudo que precisava aprender
            para se tornar um bom balconista, nessa padaria trabalhou por 1 ano
            e 3 meses, e foi nesse intervalo de tempo q conheceu um empresário
            espanhol proprietário de uma fábrica de acessórios para piscinas,
            esse empresário, de nome Emilio Trinidad Mancha, passava todos os
            dias na tal padaria para tomar uma cerveja exatamente na horario do
            almoço, o seu jeito simples de atender os clientes e esperteza para
            trabalhar, chamou a atenção do empresário que o convidou para
            trabalhar na sua fábrica como office-boy, ele relutou num primeiro
            momento mas acabou sendo convencido pela Tia a aceitar esse novo
            emprego.
          </p>
          <br />
          <p className="text-justify">
            No final do primeiro trimestre daquele longínquo ano de 1980,
            começou então a nova função que lhe foi confiada pelo empresário
            espanhol que passou a partir de então ser o seu novo patrão, nasceu
            uma boa empatia e confiança entre os dois e ali ele ficou por seis
            anos.
          </p>
          <br />
        </div>
      ),
    },
    {
      title: "Capítulo 5",
      content: (
        <div>
          {" "}
          <p className="text-justify">
            Nesse ano de 1980 um fato totalmente fora do previsto aconteceu, ele
            foi convocado para servir o Tiro de Guerra do Exército Brasileiro, a
            princípio fez de tudo pra não servir já que se apresentou à Junta
            Militar da cidade de São Bernardo do Campo, SP., ainda no ano de
            1979 exatamente no ano que completou 18 anos conforme prevê a lei,
            mas não teve alternativa, foi sim convocado e os próximos 6 meses
            que se seguiram foram difíceis e de muito sacrifício, e foi nesse
            período de tempo que passou a morar c/ uma outra Tia, a sua saudosa
            Tia Amélia (in memoriam) e essa passou a ser então a sua mãe nº 5.
          </p>
          <br />
          <p className="text-justify">
            Nota: Um detalhe que esse narrador não pode deixar passar
            despercebido trata-se da sua mãe nº 6, a sua querida Tia Juraci que
            vive em nosso meio, foi aos seus cuidados que esteve do ano de 1982
            até o início de 1986 quando se casou.
          </p>
          <br />
        </div>
      ),
    },
    {
      title: "Capítulo 6",
      content: (
        <div>
          <p className="text-justify">
            Voltando à história, cerca de menos de 2 anos depois, seu empenho e
            habilidade chamou novamente a atenção do empresário espanhol que
            havia contratado, e esse concedeu a ele por mérito, uma nova
            oportunidade na então empresa, a partir daquele momento passou a
            exercer a função de atendente de vendas, nessa nova atribuição
            adquiriu mais experiência, conheceu muitos clientes e fornecedores
            do ramo, mas não tinha noção de onde isso poderia chegar.
          </p>
          <br />
          <p className="text-justify">
            Após seis anos de trabalho nessa fábrica de acessórios de piscinas
            mais uma oportunidade lhe bateu à porta, recebeu o convite para
            trabalhar numa loja de produtos e acessórios de piscinas que ficava
            situada no bairro do Itaim Bibi na capital paulista, essa loja era
            um misto de venda de varejo e atacado, ele agarrou a oportunidade,
            cresceu na nova empresa de forma vertiginosa mesmo não tendo em seu
            currículo nenhum diploma de alguma formação profissional, ali se
            tornou uma espécie de gerente geral, esse novo cargo aumentou sua
            responsabilidade mas ampliou seu horizonte de conhecimento na área
            comercial e administrativa, o que deu a ele uma larga experiência no
            ramo, conheceu novos parceiros comerciais e ali ficou trabalhando
            até o dia 31 de agosto do ano de 1994, e foi nesse momento que
            sentiu estar preparado para começar aquilo que seria o grande sonho
            que desembarcara com ele naquela rodoviária da capital paulista por
            ocasião da sua chegada, o momento finalmente havia chegado.
          </p>
          <br />
        </div>
      ),
    },
    {
      title: "Capítulo 7",
      content: (
        <div>
          <p className="text-justify">
            O tempo passou depressa, parece ter voado, lá se foram 15 anos desde
            a sua chegada, o ano era 1994, ano da criação da nova moeda, o Real
            e também ano da morte de Airton Sena, dois acontecimentos bastante
            distintos mas que se entrelaçam, o primeiro muito importante e um
            sinal de esperança de que dias melhores estavam por vir, o segundo é
            terrível, lamentável e triste, o Brasil perdeu um dos seus maiores
            ídolos senão o maior, mas a hora era chegada, ele sentiu que estava
            preparado e criou a sua empresa, a Comercial Grosfestilo.
          </p>
          <br />
          <p className="text-justify">
            {" "}
            A primeira venda foi realizada já no dia 4 de setembro daquele ano,
            o cliente que realizou essa primeira compra continua com sua loja
            aberta e atuante até os dias de hoje e atualmente já está na segunda
            geração. Os primeiros desafios começaram chegar, a primeira compra
            de acessórios também foi realizada, tratava-se de uma caixa de
            papelão contendo 30 peneiras cata folhas, além disso comprou também
            um aparelho de fax e uma máquina de escrever manual da marca
            Olivetti.
          </p>
          <br />
        </div>
      ),
    },
    {
      title: "Capítulo 8",
      content: (
        <div>
          <p className="text-justify">
            A parceria com a marca HTH aconteceu pouco tempo depois ainda no
            primeiro semestre do ano de 1996, a ansiedade por ver as coisas
            acontecerem parecia ser seu principal estado emocional naquele
            momento, mas entendeu que precisava ir devagar, a empresa era nova
            demais, não existia crédito disponível, pq ninguém queria, e com
            toda a razão apostar no potencial de uma empresa recém criada.
          </p>
          <br />
          <p className="text-justify">
            Um dia foi convidado para um almoço com o Vice Presidente da HTH,
            essa a maior empresa do segmento de tratamento de águas de piscinas
            do Brasil, após relutar bastante por conta do sua timidez, o convite
            finalmente foi aceito, o almoço aconteceu numa churrascaria da
            região de nome <strong>Galeto na Brasa</strong>, houve uma boa
            empatia entre os participantes desse almoço, ganhou a confiança do
            então Vice Presidente cujo nome era <strong>Arnaldo Machado</strong>
            , e a partir de então as portas dessa grande empresa se abriram,
            nesse momento as coisas começaram acontecer de fato. O depósito
            improvisado na garagem da sua residência passou a não suportar o
            volume de cargas que crescia mes a mes, esse foi o primeiro desafio
            a ser enfrentado e precisou ser rápido.
          </p>
          <br />
        </div>
      ),
    },
    {
      title: "Capítulo 9",
      content: (
        <div>
          <p className="text-justify">
            {" "}
            A empresa começou crescer de forma lenta mas sustentável, já no ano
            de 2008 atingiu a marca de 400 toneladas de produtos comercializados
            e não parou por aí, continuou a crescer, a garagem da sua casa já
            não era mais suficiente para armazenar tanto produto, a casa ao lado
            foi alugada e o problema parecia ter sido resolvido.
          </p>
          <br />
          <p className="text-justify">
            {" "}
            Pouco tempo depois as duas casas já se tornaram pequenas, uma
            terceira casa foi adquirida e ali foi instalado o escritório e toda
            a administração da empresa, pouco tempo depois as três casas também
            já não eram mais suficientes, uma quarta casa foi alugada na mesma
            rua, agora com uma área total de 1.000m² o problema de espaço
            parecia ter ficado pra trás, mas pouco tempo depois as quatro casas
            já não são eram mais suficientes para suportar os processos de carga
            e descarga, no ano de 2012, a movimentação de produtos já alcançou a
            marca das 800 toneladas e o espaço disponível para armazenamento já
            não era mais suficiente, algo precisava ser feito novamente e de
            forma rápida.
          </p>
          <br />
        </div>
      ),
    },
    {
      title: "Capítulo 10",
      content: (
        <div>
          <p className="text-justify">
            {" "}
            Antes disso, no ano de 2009, diante da necessidade de agilizar seus
            processos e aprimorar seus controles, a empresa adquiriu um complexo
            programa de gestão que começou rodar de forma definitiva a partir de
            01 de julho daquele ano, trata-se do{" "}
            <strong>SIGNUS SOFTWARE ERP</strong>, um produto da empresa{" "}
            <strong>NOVA SOLUÇÕES</strong>, os processos melhoraram
            significativamente a partir desse momento, ganharam velocidade, as
            vendas cresceram, uma nova equipe comercial foi montada e
            aprimorada, e a empresa continuou a alcançar números bastante
            robustos.
          </p>
          <br />
          <p className="text-justify">
            {" "}
            No ano de 2013 adquiriu um imóvel com 2.000m² de área construída, um
            prédio imponente, arrojado, espaçoso que conta inclusive com
            estacionamento para colaboradores e visitantes, modernas salas
            destinadas a administração, rampa de acesso para carga e descarga,
            amplo espaço para armazenamento com capacidade útil de mais de 300
            toneladas de produtos e foi exatamente nesse ano que o volume
            movimentado atingiu pouco mais de 1.000 toneladas.
          </p>
          <br />
        </div>
      ),
    },
    {
      title: "Capítulo 11",
      content: (
        <div>
          <p className="text-justify">
            {" "}
            Em 2024, a empresa completou 30 anos de existência, já está na
            segunda geração, mas o seu fundador, aquele migrante paranaense que
            desembarcou na rodoviária Julio Prestes lá no centro da Capital
            Paulista no dia 6 de janeiro de 1979 trazendo consigo um sonho,
            continua trabalhando e participando diretamente das decisões mais
            importantes.
          </p>
          <br />
          <p className="text-justify">
            {" "}
            A empresa tem projetos de governança ambiental já implantados e
            também outros projetos de longo prazo a serem implantados no futuro.
            Pensando e focando sempre na melhoria dos processos internos, a
            empresa continua firme e preparada para as mudanças tecnológicas que
            parecem chegar a passos largos, mas uma coisa é certa, essa empresa
            nunca deixará para trás as suas raízes e o seu conceito de
            humanidade, e carregando sempre consigo esse conceito, continuará a
            contar sua linda e empolgante história!
          </p>
          <br />
        </div>
      ),
    },
    // {
    //   title: "Capítulo 12",
    //   content: (
    //     <div>
    //       <p className="text-justify">
    //         {" "}
    //         A empresa tem projetos de governança ambiental já implantados e
    //         também outros projetos de longo prazo a serem implantados no futuro.
    //         Pensando e focando sempre na melhoria dos processos internos, a
    //         empresa continua firme e preparada para as mudanças tecnológicas que
    //         parecem chegar a passos largos, mas uma coisa é certa, essa empresa
    //         nunca deixará para trás as suas raízes e o seu conceito de
    //         humanidade, e carregando sempre consigo esse conceito, continuará a
    //         contar sua linda e empolgante história!
    //         <br />
    //         <br />A empresa tem projetos de governança ambiental já implantados
    //         e também outros projetos de longo prazo a serem implantados no
    //         futuro. Pensando e focando sempre na melhoria dos processos
    //         internos, a empresa continua firme e preparada para as mudanças
    //         tecnológicas que parecem chegar a passos largos, mas uma coisa é
    //         certa, essa empresa nunca deixará para trás as suas raízes e o seu
    //         conceito de humanidade, e carregando sempre consigo esse conceito,
    //         continuará a contar sua linda e empolgante história!
    //       </p>
    //       <br />
    //     </div>
    //   ),
    // },
  ];

  // 🔧 Adiciona essas variáveis:
  const titleModal = "NOSSA HISTÓRIA!";

  return (
    <div>
      <Buttons
        onClick={() => setVisible(true)}
        name="Continue lendo"
        className="mt-6 mb-8 desktop1:mb-0"
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
        <div className="w-full bg-stone-100 flex justify-center items-center">
          <BookAccordion chapters={chapters} />
        </div>{" "}
      </Dialog>
    </div>
  );
}
