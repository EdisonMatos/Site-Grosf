import { useState } from "react";

export default function CalculaFacilGrosf() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Olá! O que você deseja calcular?" },
  ]);
  const [step, setStep] = useState("start"); // start, format, measures, productOption, circum
  const [userChoice, setUserChoice] = useState(null);
  const [format, setFormat] = useState(null);
  const [inputs, setInputs] = useState({
    comprimento: "",
    largura: "",
    profundidade: "",
    diametro: "",
  });
  const [volume, setVolume] = useState(null);
  const [treatmentOption, setTreatmentOption] = useState(null);
  const [phValue, setPhValue] = useState(7.5);
  const [fundoVisivel, setFundoVisivel] = useState(true);

  const delayResponse = (text, callback) => {
    setMessages((prev) => [...prev, { from: "bot", text: "..." }]);
    setTimeout(() => {
      setMessages((prev) => [...prev.slice(0, -1), { from: "bot", text }]);
      if (callback) callback();
    }, 3000); // 3 segundos de delay para exemplo
  };

  const handleStartChoice = (choice) => {
    setMessages((prev) => [...prev, { from: "user", text: choice }]);
    setUserChoice(choice);
    if (choice === "Somente o volume da piscina") {
      setStep("format");
      delayResponse("Qual o formato da sua piscina?", null);
    } else {
      setStep("productOption");
      delayResponse("Você deseja qual tipo de tratamento?", null);
    }
  };

  const handleTreatmentOption = (option) => {
    setMessages((prev) => [...prev, { from: "user", text: option }]);
    setTreatmentOption(option);

    if (volume) {
      // Primeiro mostra a mensagem de delay
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: `Usando o volume calculado: ${volume.toFixed(
            2
          )} litros. Calculando produtos...`,
        },
      ]);

      setTimeout(() => {
        // Depois mostra os produtos
        calcularProdutos(volume);
      }, 2000); // tempo de espera antes de exibir os produtos
    } else {
      // Volume ainda não calculado, pedimos medidas
      setStep("format");
      delayResponse("Qual o formato da sua piscina?", null);
    }
  };

  const handleFormatChoice = (fmt) => {
    setMessages((prev) => [...prev, { from: "user", text: fmt }]);
    setFormat(fmt);
    setStep("measures");
  };

  const handleInputChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const calcularVolume = () => {
    let v = 0;
    if (format === "Quadrada ou retangular") {
      const { comprimento, largura, profundidade } = inputs;
      v = comprimento * largura * profundidade;
    } else if (format === "Redonda") {
      const { diametro, profundidade } = inputs;
      v = diametro * diametro * profundidade * 0.785;
    } else if (format === "Oval") {
      const { comprimento, largura, profundidade } = inputs;
      v = comprimento * largura * profundidade * 0.785;
    }
    setVolume(v);

    if (userChoice === "Somente o volume da piscina") {
      delayResponse(`O volume da piscina é ${v.toFixed(2)} litros.`, () =>
        setStep("askProducts")
      );
    } else {
      // Option2: calcular produtos
      delayResponse(
        `O volume da piscina é ${v.toFixed(2)} litros. Calculando produtos...`,
        () => calcularProdutos(v)
      );
    }
  };

  const calcularProdutos = (vol) => {
    const volumeM3 = vol / 1000;
    const produtos = [];

    if (format === "Quadrada ou retangular") {
      produtos.push(
        `Cloro Granulado Tradicional: ${(14 * volumeM3).toFixed(2)} g`
      );
      produtos.push(
        `Dicloro Puro ou Multifunções: ${(10 * volumeM3).toFixed(2)} g`
      );
      produtos.push(`Cloro Granulado 10 em 1: ${(18 * volumeM3).toFixed(2)} g`);
      produtos.push(`Algicida de choque: ${(5 * volumeM3).toFixed(2)} ml`);
      produtos.push(`Clarificante: ${(6 * volumeM3).toFixed(2)} ml`);
      produtos.push(`Elimina óleo: ${(14 * volumeM3).toFixed(2)} ml`);
    } else if (format === "Oval") {
      produtos.push(
        `Cloro Granulado Tradicional: ${(14 * volumeM3).toFixed(2)} g`
      );
      produtos.push(
        `OU Dicloro Puro ou Multifunções: ${(10 * volumeM3).toFixed(2)} g`
      );
      produtos.push(
        `OU Cloro Granulado 10 em 1: ${(18 * volumeM3).toFixed(2)} g`
      );
      produtos.push(`Algicida de choque: ${(5 * volumeM3).toFixed(2)} ml`);
      produtos.push(`Clarificante: ${(6 * volumeM3).toFixed(2)} ml`);
      produtos.push(`Elimina óleo: ${(14 * volumeM3).toFixed(2)} ml`);
    } else if (format === "Redonda") {
      produtos.push(
        `Cloro Granulado Tradicional: ${(12 * volumeM3).toFixed(2)} g`
      );
      produtos.push(
        `OU Dicloro Puro ou Multifunções: ${(9 * volumeM3).toFixed(2)} g`
      );
      produtos.push(
        `OU Cloro Granulado 10 em 1: ${(16 * volumeM3).toFixed(2)} g`
      );
      produtos.push(`Algicida de choque: ${(4 * volumeM3).toFixed(2)} ml`);
      produtos.push(`Clarificante: ${(5 * volumeM3).toFixed(2)} ml`);
      produtos.push(`Elimina óleo: ${(12 * volumeM3).toFixed(2)} ml`);
    }

    // Adiciona produtos na mensagem
    setMessages((prev) => [
      ...prev,
      {
        from: "bot",
        text: produtos.join("\n"), // \n será interpretado no JSX com whitespace-pre-line
      },
    ]);

    // Passa para perguntar sobre produtos circunstanciais
    setStep("askCircunstancial");
  };

  const handleCircunstancial = () => {
    const volumeM3 = volume / 1000;
    const circ = [];

    if (phValue >= 7 && phValue <= 8)
      circ.push(`Redutor de pH: ${(5 * volumeM3).toFixed(2)} ml`);
    else if (phValue > 8)
      circ.push(`Redutor de pH: ${(8 * volumeM3).toFixed(2)} ml`);

    circ.push(
      `Elevador de alcalinidade em pó: ${(17 * volumeM3).toFixed(2)} g`
    );
    circ.push(`Auxiliar de aspiração: ${(6 * volumeM3).toFixed(2)} ml`);

    if (fundoVisivel)
      circ.push(`Água turva/elimina manchas: ${(15 * volumeM3).toFixed(2)} ml`);
    else
      circ.push(`Água turva/elimina manchas: ${(50 * volumeM3).toFixed(2)} ml`);

    if (fundoVisivel)
      circ.push(`Eliminador de metais: ${(15 * volumeM3).toFixed(2)} ml`);
    else circ.push(`Eliminador de metais: ${(50 * volumeM3).toFixed(2)} ml`);

    circ.push(`Eliminador de algas: ${(10 * volumeM3).toFixed(2)} ml`);
    circ.push(`Limpa bordas: utilize quantidade razoável numa esponja`);

    // Juntando com \n e renderizando com whitespace-pre-line
    const circText = circ.join("\n");

    delayResponse(<div className="whitespace-pre-line">{circText}</div>, () => {
      setStep("reset");
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Está bem, aqui encerramos o cálculo, espero ter ajudado.",
        },
      ]);
    });
  };

  const handleReset = () => {
    setMessages([{ from: "bot", text: "Olá! O que você deseja calcular?" }]);
    setStep("start");
    setUserChoice(null);
    setFormat(null);
    setInputs({ comprimento: "", largura: "", profundidade: "", diametro: "" });
    setVolume(null);
    setTreatmentOption(null);
  };

  return (
    <div className="flex flex-col max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-white">
      <div className="flex flex-col space-y-4 h-96 overflow-y-auto mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded ${
              msg.from === "bot"
                ? "bg-gray-200 self-start whitespace-pre-line" // <--- aqui
                : "bg-primary text-white self-end"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {step === "start" && (
        <div className="flex flex-col space-y-2">
          <button
            onClick={() => handleStartChoice("Somente o volume da piscina")}
            className="btn-primary bg-primary p-2 rounded-md text-white"
          >
            Somente o volume da piscina
          </button>
          <button
            onClick={() => handleStartChoice("Volume + produtos")}
            className="btn-primary bg-primary p-2 rounded-md text-white"
          >
            Volume + produtos
          </button>
        </div>
      )}

      {step === "productOption" && (
        <div className="flex flex-col space-y-2">
          <button
            onClick={() =>
              handleTreatmentOption(
                "Primeiro tratamento ou longo período de abandono"
              )
            }
            className="btn-primary bg-primary p-2 rounded-md text-white"
          >
            Primeiro tratamento ou longo período de abandono
          </button>
          <button
            onClick={() =>
              handleTreatmentOption("Apenas manutenção ou preventivo")
            }
            className="btn-primary bg-primary p-2 rounded-md text-white"
          >
            Apenas manutenção ou preventivo
          </button>
        </div>
      )}

      {step === "format" && (
        <div className="flex flex-col space-y-2">
          <button
            onClick={() => handleFormatChoice("Quadrada ou retangular")}
            className="btn-primary bg-primary p-2 rounded-md text-white"
          >
            Quadrada ou retangular
          </button>
          <button
            onClick={() => handleFormatChoice("Redonda")}
            className="btn-primary bg-primary p-2 rounded-md text-white"
          >
            Redonda
          </button>
          <button
            onClick={() => handleFormatChoice("Oval")}
            className="btn-primary bg-primary p-2 rounded-md text-white"
          >
            Oval
          </button>
        </div>
      )}

      {step === "measures" && (
        <div className="flex flex-col space-y-2 mt-2">
          {format !== "Redonda" && (
            <>
              <input
                type="number"
                name="comprimento"
                placeholder="Comprimento (m)"
                value={inputs.comprimento}
                onChange={handleInputChange}
                className="input-field"
              />
              <input
                type="number"
                name="largura"
                placeholder="Largura (m)"
                value={inputs.largura}
                onChange={handleInputChange}
                className="input-field"
              />
            </>
          )}
          {format === "Redonda" && (
            <input
              type="number"
              name="diametro"
              placeholder="Diâmetro (m)"
              value={inputs.diametro}
              onChange={handleInputChange}
              className="input-field"
            />
          )}
          <input
            type="number"
            name="profundidade"
            placeholder="Profundidade média (m)"
            value={inputs.profundidade}
            onChange={handleInputChange}
            className="input-field"
          />
          <button onClick={calcularVolume} className="btn-primary mt-2">
            Calcular volume e produtos
          </button>
        </div>
      )}

      {step === "askProducts" && (
        <div className="space-y-2">
          <p>
            Gostaria de saber os produtos a serem utilizados na sua piscina?
          </p>
          <button
            className="px-4 py-2 bg-primary text-white rounded-lg"
            onClick={() => {
              setStep("productOption");
              delayResponse("Você deseja qual tipo de tratamento?", null);
            }}
          >
            Sim
          </button>
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded-lg"
            onClick={() => {
              setStep("reset");
              setMessages((prev) => [
                ...prev,
                {
                  from: "bot",
                  text: "Está bem, aqui encerramos o cálculo, espero ter ajudado.",
                },
              ]);
            }}
          >
            Não
          </button>
        </div>
      )}

      {step === "circum" && (
        <div className="flex flex-col space-y-2 mt-2">
          <button onClick={handleCircunstancial} className="btn-primary bg-primary p-2 rounded-md text-white">
            Calcular produtos circunstanciais
          </button>
        </div>
      )}

      {step === "askCircunstancial" && (
        <div className="space-y-2">
          <p>Gostaria de saber também os produtos circunstanciais?</p>
          <button
            className="px-4 py-2 bg-primary text-white rounded-lg"
            onClick={() => handleCircunstancial()}
          >
            Sim
          </button>
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded-lg"
            onClick={() => {
              setStep("reset");
              setMessages((prev) => [
                ...prev,
                {
                  from: "bot",
                  text: "Está bem, aqui encerramos o cálculo, espero ter ajudado.",
                },
              ]);
            }}
          >
            Não
          </button>
        </div>
      )}

      {step === "reset" && (
        <button onClick={handleReset} className="btn-primary mt-4">
          Reiniciar cálculo
        </button>
      )}
    </div>
  );
}
