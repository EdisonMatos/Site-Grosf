import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "main"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(233, 233, 233, 0.5)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <MotionDivLeftToRight>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <h1 className="font-mainFont text-paragraph3 phone3:text-paragraph4">
              A empresa abre nos finais de semana e nos feriados?
            </h1>
          </AccordionSummary>
          <AccordionDetails>
            <p className="font-mainFont text-quaternary text-paragraph3 phone3:text-paragraph4 tablet1:text-paragraph3 desktop1:text-paragraph2 desktop2:text-paragraph3 text-justify">
              Não, nosso horário de funcionamento é de segunda a sexta-feira, das
              8h até as 18h, com um intervalo de 1 hora das 12h até as 13h para
              descanso e refeição.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <h1 className="font-mainFont text-paragraph3 phone3:text-paragraph4">
              A empresa conta com atendimento presencial?{" "}
            </h1>
          </AccordionSummary>
          <AccordionDetails>
            <p className="font-mainFont text-quaternary text-paragraph3 phone3:text-paragraph4 tablet1:text-paragraph3 desktop1:text-paragraph2 desktop2:text-paragraph3 text-justify">
              Não, nosso atendimento é somente pelo WhatsApp, por telefone ou
              por email.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <h1 className="font-mainFont text-paragraph3 phone3:text-paragraph4">
              A empresa oferece cursos de capacitação ou treinamento para
              profissionais ou proprietários de piscinas?{" "}
            </h1>
          </AccordionSummary>
          <AccordionDetails>
            <p className="font-mainFont text-quaternary text-paragraph3 phone3:text-paragraph4 tablet1:text-paragraph3 desktop1:text-paragraph2 desktop2:text-paragraph3 text-justify">
              Não, os cursos e treinamentos são oferecidos pelos nossos
              parceiros comerciais. Caso haja interesse, escolha a marca desejada
              e acesse o site do fabricante.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <h1 className="font-mainFont text-paragraph3 phone3:text-paragraph4">
              A empresa exige valor mínimo por pedido? Se sim, qual o valor e o
              prazo de pagamento oferecido?{" "}
            </h1>
          </AccordionSummary>
          <AccordionDetails>
            <p className="font-mainFont text-quaternary text-paragraph3 phone3:text-paragraph4 tablet1:text-paragraph3 desktop1:text-paragraph2 desktop2:text-paragraph3 text-justify">
              Sim, o valor mínimo por pedido é de R$300,00 e o prazo para
              pagamento é de 21 dias com boleto bancário.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <h1 className="font-mainFont text-paragraph3 phone3:text-paragraph4">
              Existe um valor mínimo para entrega gratuita do pedido?{" "}
            </h1>
          </AccordionSummary>
          <AccordionDetails>
            <p className="font-mainFont text-quaternary text-paragraph3 phone3:text-paragraph4 tablet1:text-paragraph3 desktop1:text-paragraph2 desktop2:text-paragraph3 text-justify">
              Sim, o valor mínimo para entrega grátis dentro do nosso território
              de atuação é de R$1.200,00 por pedido.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <h1 className="font-mainFont text-paragraph3 phone3:text-paragraph4">
              Quais os territórios de atuação da empresa?{" "}
            </h1>
          </AccordionSummary>
          <AccordionDetails>
            <p className="font-mainFont text-quaternary text-paragraph3 phone3:text-paragraph4 tablet1:text-paragraph3 desktop1:text-paragraph2 desktop2:text-paragraph3 text-justify">
              Atuamos em 3 territórios específicos no estado de São Paulo: <br />
              RT1 - Vale do Paraíba <br />
              RT2 - Litoral Paulista <br />
              RT3 - Circuito das Águas Paulista e Grande ABC
            </p>
          </AccordionDetails>
        </Accordion>

        {/* Continue with other Accordion items */}
      </MotionDivLeftToRight>
    </div>
  );
}
