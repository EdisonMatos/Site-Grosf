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
      title: "Capítulo 1 - A chegada à capital",
      content: (
        <div>
          <p className="text-justify">
            {" "}
            No dia 6 de janeiro de 1979, por volta das 6h da manhã, desembarcava
            na rodoviária Júlio Prestes, no centro da capital paulista, trazido
            por uma tia, um jovem migrante paranaense com apenas 17 anos de
            idade.
            <br />
            <br />
            Trajava calça e camisa bastante desbotadas pelo uso intenso na lida
            diária da roça; nos pés, um par de chinelos com solado já
            desgastado; e, no ombro esquerdo, um embornal — uma espécie de
            sacola funda e estreita feita de sobras de tecidos de costura, com
            uma alça comprida que servia de apoio.
            <br />
            <br />
            Bastante utilizado na roça, esse utensílio caipira servia
            principalmente para levar comida aos trabalhadores nas lavouras de
            café. Mas, no embornal que trazia — sua única bagagem de mão —
            guardava apenas alguns poucos pertences. Já o coração desembarcara
            na metrópole cheio de esperança e fé de vencer um dia e ganhar
            dinheiro para ajudar os pais e irmãos que lá ficaram.
            <br />
            <br />
            Logo após o desembarque, seus olhos brilharam ao olhar para a
            cobertura colorida da linda rodoviária, composta por milhares de
            pequenos quadrados de acrílico com fundo ligeiramente ovalado, no
            formato de diamante. Em várias cores, cobriam o teto e desciam em
            forma de “L” invertido, de cima para baixo, por cerca de um metro
            nas laterais daquela gigantesca edificação.
            <br />
            <br />
            Nunca havia visto antes algo parecido. Silencioso, observava um
            tanto assustado o movimento de pessoas e veículos que iam e vinham
            naquele horário pelas estreitas ruas, o que o deixava apreensivo e
            pensativo.
            <br />
            <br />
            Do lado de fora, um primo os esperava com seu fusca cor de café com
            leite, encostado no meio-fio da calçada. Tratava-se do primo Moisés,
            primo de primeiro grau, que viria a ser seu irmão substituto na
            capital.
            <br />
            <br />
            Ele sai em arrancada, dirige em forma de zigue-zague pelas ruas
            estreitas e ganha ainda mais velocidade ao entrar numa rodovia larga
            e de alta velocidade, que só depois de muito tempo viria a saber
            tratar-se da Via Anchieta.
          </p>
          <br />
          <br />
        </div>
      ),
    },
    {
      title: "Capítulo 2 - O primeiro emprego e as mães substitutas",
      content: (
        <div>
          <p className="text-justify">
            Pega então sua pouca bagagem, embarca no velho fusca, enche-se de
            esperança, foco e fé, e promete a si mesmo, com o coração cheio de
            alegria e entusiasmo, que um dia seria dono do próprio negócio. A
            vida anda, o tempo passa rápido e a promessa passa a ser perseguida
            como se fosse a única missão a ser cumprida.
            <br />
            <br />
            Tão logo chegou, foi morar provisoriamente com a mesma tia que o
            trouxera, a saudosa e querida Tia Tereza (in memoriam), que naquele
            momento passou a ser sua mãe substituta nº 4. Antes disso, havia
            morado com sua mãe biológica, Dona Zina (in memoriam), a nº 1; com a
            Tia Quita (in memoriam), a nº 2; e com a Tia Nhá (in memoriam), a nº
            3, todas residentes na região norte do Estado do Paraná naquela
            ocasião.
            <br />
            <br />
            Um detalhe que este narrador não pode deixar passar despercebido
            trata-se da mãe substituta nº 6, a querida Tia Juraci, que vive em
            nosso meio. Foi aos seus cuidados que esteve de 1982 até o início de
            1986, quando se casou.
            <br />
            <br />
            Dois dias após sua chegada, começou a trabalhar numa padaria como
            balconista, ao lado de um tio muito querido. Ali conheceu seu
            Moisés, um funcionário antigo, que lhe ensinou tudo o que precisava
            para se tornar um bom balconista.
            <br />
            <br />
            Nessa padaria trabalhou por 1 ano e 3 meses. Nesse intervalo de
            tempo conheceu um empresário espanhol, proprietário de uma fábrica
            de acessórios para piscinas. Esse empresário, de nome Emilio
            Trinidad Mancha, passava todos os dias na padaria para tomar meia
            cerveja exatamente no horário do almoço. O jeito simples de atender
            clientes e a esperteza para trabalhar chamaram a atenção do
            empresário, que o convidou para trabalhar em sua fábrica como
            office-boy. Ele relutou num primeiro momento, mas acabou sendo
            convencido pela tia a aceitar o novo emprego.
            <br />
            <br />
            No final do primeiro trimestre daquele longínquo ano de 1980,
            começou então a nova função que lhe foi confiada pelo empresário
            espanhol. Nasceu uma boa empatia e confiança entre os dois, e ali
            ele ficou por seis anos.
          </p>
        </div>
      ),
    },
    {
      title: "Capítulo 3 - O Tiro de Guerra",
      content: (
        <div>
          <p className="text-justify">
            Nesse ano de 1980, um fato totalmente fora do previsto aconteceu:
            ele foi convocado para servir no Tiro de Guerra do Exército
            Brasileiro. A princípio fez de tudo para não servir, já que se
            apresentou à Junta Militar da cidade de São Bernardo do Campo, SP,
            ainda em 1979, ano em que completou 18 anos, conforme prevê a lei.
            Mas não teve alternativa: foi convocado, e os próximos 6 meses foram
            difíceis e de muito sacrifício. Nesse período passou a morar com
            outra tia, a saudosa Tia Amélia (in memoriam), que se tornou sua mãe
            substituta nº 5.
            <br />
            <br />
            Menos de 2 anos depois, seu empenho e habilidade chamaram novamente
            a atenção do empresário espanhol que o contratara. Por mérito,
            foi-lhe concedida uma nova oportunidade na empresa, passando a
            exercer a função de atendente de vendas. Nessa nova atribuição
            adquiriu mais experiência, conheceu muitos clientes e fornecedores
            do ramo, mas ainda não tinha noção de onde isso poderia chegar.
          </p>
        </div>
      ),
    },
    {
      title: "Capítulo 4 - O novo trabalho",
      content: (
        <div>
          <p className="text-justify">
            Após seis anos de trabalho na fábrica de acessórios de piscinas, uma
            nova oportunidade lhe bateu à porta. Recebeu o convite para
            trabalhar numa loja de produtos e acessórios para piscinas, situada
            no bairro do Itaim Bibi, em São Paulo.
            <br />
            <br />
            Essa loja era um misto de venda no varejo e no atacado. Ele agarrou
            a oportunidade, cresceu na nova empresa de forma vertiginosa mesmo
            sem possuir nenhum diploma ou formação profissional. Ali se tornou
            uma espécie de gerente geral. Esse novo cargo aumentou sua
            responsabilidade, mas ampliou seu horizonte de conhecimento na área
            comercial e administrativa, dando-lhe larga experiência no ramo.
            Conheceu novos parceiros comerciais e ali ficou até o dia 31 de
            agosto de 1994.
            <br />
            <br />
            Foi nesse momento que sentiu estar preparado para começar aquilo que
            era o grande sonho que desembarcara com ele na rodoviária da capital
            paulista em 1979. O momento finalmente havia chegado. Pediu então
            orientação a um contador sobre a abertura de uma empresa, contratou
            seus serviços e seguiu em frente sem olhar para os lados.
          </p>
        </div>
      ),
    },
    {
      title: "Capítulo 5 - A criação da empresa e a primeira venda",
      content: (
        <div>
          {" "}
          <p className="text-justify">
            O tempo passou depressa, parecia voar. Lá se foram 15 anos desde a
            chegada. O ano era 1994, ano da criação da nova moeda, o Real, e
            também o ano da morte de Ayrton Senna — dois acontecimentos
            distintos, mas que se entrelaçam: o primeiro, importante e sinal de
            esperança de que dias melhores estavam por vir; o segundo, terrível
            e triste, pois o Brasil perdera um de seus maiores ídolos, senão o
            maior.
            <br />
            <br />
            Mas a hora havia chegado. Ele sentiu-se preparado e criou sua
            empresa: a Comercial Grosfestilo.
            <br />
            <br />
            A primeira venda foi realizada já no dia 4 de setembro daquele ano.
            O cliente que realizou essa primeira compra foi a Pav Piscinas, da
            cidade de Embu das Artes, que continua aberta e atuante até os dias
            de hoje, atualmente já sob o comando da segunda geração da família.
            <br />
            <br />O cheque pré-datado que recebeu para a quitação dessa venda
            foi cuidadosamente guardado dentro das páginas de uma bíblia, que se
            transformou a partir de então numa espécie de cofre, onde ficou
            juntamente com outros que vieram depois, à espera do dia do depósito
            e da demorada compensação que o sistema bancário exigia naquela
            época.
          </p>
        </div>
      ),
    },
    {
      title: "Capítulo 6 - A origem do nome",
      content: (
        <div>
          <p className="text-justify">
            A origem do nome Grosfestilo se deu num contexto não muito comum.
            Ele queria um nome arrojado, estiloso e diferente do que existia na
            época — esse era o primeiro desafio.
            <br />
            <br />
            No final da década de 1980 e início da de 1990, começaram a fazer
            sucesso no Brasil os móveis de piscina feitos em plástico:
            resistentes, duráveis, fáceis de manusear, de armazenar e com design
            bonito. Até então, esses móveis eram fabricados em fibra de vidro ou
            madeira.
            <br />
            <br />
            Foi nessa ocasião que aportou no Brasil a Grosfillex, empresa
            francesa fabricante desse tipo de móvel. Havia, na cidade de São
            Carlos, uma loja de produtos para piscinas que também distribuía
            móveis da Marfinite. O nome da loja era Marfiestilo.
            <br />
            <br />
            Como havia grande admiração pelo trabalho do proprietário dessa loja
            e de sua esposa, veio daí a inspiração: a união do nome Grosfillex +
            Estilo, nascendo assim a Grosfiestilo, que depois virou Grosfestilo.
            <br />
            <br />O projeto inicial era ser revendedor da marca, mas não
            prosperou. A empresa se firmou na distribuição de produtos e
            acessórios para piscinas, ficando apenas o nome, que resiste ao
            tempo até hoje.
          </p>
          <br />
        </div>
      ),
    },
    {
      title: "Capítulo 7 - A primeira compra e a parceria com a HTH",
      content: (
        <div>
          <p className="text-justify">
            Os primeiros desafios começaram a chegar. A primeira compra de
            acessórios foi uma caixa de papelão contendo 30 peneiras
            cata-folhas. Além disso, comprou também um aparelho de fax e uma
            máquina de escrever manual Olivetti, ambos usados. Esses dois
            últimos, que compunham os primeiros ativos da empresa, foram
            trocados por produtos de piscina.
            <br />
            <br />
            A parceria com a marca HTH aconteceu pouco tempo depois, ainda no
            primeiro semestre de 1996. A ansiedade por ver as coisas acontecerem
            parecia ser seu principal estado emocional naquele momento, mas ele
            entendeu que precisava ir devagar. A empresa era nova demais, não
            havia crédito disponível, e ninguém queria — com razão — apostar em
            uma empresa recém-criada.
            <br />
            <br />
            Um dia, foi convidado para um almoço com o vice-presidente da HTH, a
            maior empresa de tratamento de águas de piscinas do Brasil. Após
            relutar bastante por conta da timidez, o convite finalmente foi
            aceito.
            <br />
            <br />
            O almoço aconteceu numa churrascaria chamada Galeto na Brasa. Houve
            boa empatia entre os participantes, e ele ganhou a confiança do
            vice-presidente, Arnaldo Machado. A partir daí, as portas dessa
            grande empresa se abriram e, nesse momento, as coisas começaram a
            acontecer de fato.
            <br />
            <br />O depósito improvisado na garagem de sua residência passou a
            não suportar o volume de cargas, que crescia mês a mês. Esse foi o
            primeiro grande desafio a ser enfrentado — e precisou ser rápido.
          </p>
          <br />
        </div>
      ),
    },
    {
      title: "Capítulo 8 - O crescimento rápido",
      content: (
        <div>
          <p className="text-justify">
            A empresa começou a crescer de forma lenta, mas sustentável. Já em
            2008 atingiu a marca de 400 toneladas de produtos comercializados.
            <br />
            <br />
            A garagem da casa já não era mais suficiente. A casa ao lado foi
            alugada e o problema parecia resolvido. Pouco tempo depois, as duas
            casas já eram pequenas. Uma terceira foi adquirida, onde foi
            instalado o escritório e toda a administração da empresa.
            <br />
            <br />
            Logo em seguida, uma quarta casa foi alugada na mesma rua. Agora,
            com uma área total de 1.000 metros quadrados, parecia que o problema
            de espaço havia ficado para trás.
            <br />
            <br />
            Mas pouco tempo depois as quatro casas também não foram mais
            suficientes. Em 2012, a movimentação de produtos alcançou a marca de
            800 toneladas, e o espaço já não atendia às necessidades. Algo
            precisava ser feito — novamente, e de forma rápida.
          </p>
        </div>
      ),
    },
    {
      title: "Capítulo 9 - A aquisição do programa de gestão",
      content: (
        <div>
          <p className="text-justify">
            {" "}
            No ano de 2009, diante da necessidade de agilizar processos e
            aprimorar controles, a empresa adquiriu um programa de gestão que
            começou a rodar definitivamente em 1º de julho daquele ano: o Signus
            Software ERP, da empresa Nova Soluções.
            <br />
            <br />
            Os processos melhoraram significativamente. Ganharam velocidade, as
            vendas cresceram, uma nova equipe comercial foi estruturada e a
            empresa continuou a alcançar números bastante robustos.
          </p>
        </div>
      ),
    },
    {
      title: "Capítulo 10 - A aquisição do novo edifício-sede",
      content: (
        <div>
          <p className="text-justify">
            Em 2013, foi adquirido um imóvel com 2.000 metros quadrados de área
            construída: um prédio imponente, arrojado e espaçoso, com
            estacionamento para colaboradores e visitantes, modernas salas
            administrativas, rampa de acesso para carga e descarga e amplo
            espaço de armazenamento, com capacidade útil para mais de 300
            toneladas de produtos.
            <br />
            <br />
            Exatamente nesse ano, o volume movimentado atingiu pouco mais de
            1.000 toneladas.
          </p>
        </div>
      ),
    },
    {
      title: "Capítulo 11 - 2024, ano da comemoração dos 30 anos",
      content: (
        <div>
          <p className="text-justify">
            Em 2024, a empresa completou 30 anos de existência. Já está na
            segunda geração, mas o fundador — aquele imigrante paranaense que
            desembarcou na rodoviária Júlio Prestes, no centro da capital
            paulista, no dia 6 de janeiro de 1979, trazendo consigo um sonho —
            continua trabalhando e participando diretamente das decisões mais
            importantes.
            <br />
            <br />
            A empresa já implantou projetos de governança ambiental e tem
            outros, de longo prazo, a serem implementados.
            <br />
            <br />
            Sempre pensando na melhoria dos processos internos, a empresa segue
            firme e preparada para as mudanças tecnológicas que chegam a passos
            largos.
            <br />
            <br />
            Mas uma coisa é certa: nunca deixará para trás suas raízes e seu
            conceito de humanidade. E, carregando sempre esse conceito,
            continuará a contar sua linda e empolgante história!
          </p>
        </div>
      ),
    },
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
