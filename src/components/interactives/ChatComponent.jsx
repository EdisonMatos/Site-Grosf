import { useState } from "react";
import Buttons from "./Buttons";

export default function ChatPiscina() {
  const [step, setStep] = useState(0);
  const [formato, setFormato] = useState("");
  const [tratamentoTipo, setTratamentoTipo] = useState("");
  const [mensagens, setMensagens] = useState([]);
  const [volume, setVolume] = useState("");
  const [dimensoes, setDimensoes] = useState({
    comprimento: "",
    largura: "",
    profundidade: "",
    diametro: "",
  });
  const [digitando, setDigitando] = useState(false);

  const adicionarMensagem = (texto, tipo = "bot", delay = true) => {
    if (tipo === "bot" && delay) {
      setDigitando(true);
      setTimeout(() => {
        setMensagens((prev) => [...prev, { texto, tipo }]);
        setDigitando(false);
      }, 5000); // tempo de digitação simulado
    } else {
      setMensagens((prev) => [...prev, { texto, tipo }]);
    }
  };

  const calcularVolumePiscina = () => {
    let litros = 0;
    const p = parseFloat(dimensoes.profundidade);

    if (formato === "reta") {
      const c = parseFloat(dimensoes.comprimento);
      const l = parseFloat(dimensoes.largura);
      litros = c * l * p * 1000;
    } else if (formato === "redonda") {
      const d = parseFloat(dimensoes.diametro);
      litros = 0.785 * d * d * p * 1000;
    }

    if (isNaN(litros) || litros <= 0) {
      adicionarMensagem("Por favor, insira medidas válidas.");
      return;
    }

    setVolume(litros.toFixed(2));
    adicionarMensagem(
      `O volume da sua piscina é aproximadamente ${litros.toFixed(2)} litros.`
    );

    if (tratamentoTipo) {
      calcularProdutos(litros);
    }

    setTimeout(() => {
      setStep(4);
    }, 500);
  };

  const calcularProdutos = (litrosCalculado = null) => {
    const litros = parseFloat(litrosCalculado || volume);

    if (isNaN(litros) || litros <= 0) {
      adicionarMensagem("Por favor, insira um volume válido.");
      return;
    }

    const format = (v) => ((v * litros) / 1000).toFixed(1);

    if (tratamentoTipo === "primeiro") {
      adicionarMensagem("Produtos para Primeiro Tratamento:");
      adicionarMensagem(
        `- Cloro Granulado Tradicional ou Dicloro: ${format(10)}g`
      );
      adicionarMensagem(`- Dicloro puro ou multifunções: ${format(10)}g`);
      adicionarMensagem(`- Cloro Granulado 10 em 1: ${format(18)}g`);
      adicionarMensagem(`- Algicida de manutenção: ${format(10)}ml`);
      adicionarMensagem(`- Clarificante: ${format(6)}ml`);
      adicionarMensagem(`- Elimina Óleo: ${format(14)}ml`);
    } else {
      adicionarMensagem("Produtos para Manutenção:");
      adicionarMensagem(
        `- Cloro Granulado Tradicional ou Dicloro: ${format(
          5
        )}g (3x por semana)`
      );
      adicionarMensagem(
        `- Dicloro puro ou multifunções: ${format(5)}g (3x por semana)`
      );
      adicionarMensagem(
        `- Cloro Granulado 10 em 1: ${format(10)}g (3x por semana)`
      );
      adicionarMensagem(
        `- Algicida de manutenção: ${format(5)}ml (1x por semana)`
      );
      adicionarMensagem(`- Clarificante: ${format(1.5)}ml (1x por semana)`);
      adicionarMensagem(`- Elimina Óleo: ${format(7)}ml (quando necessário)`);
    }
  };

  const mostrarProdutosExtras = () => {
    const litros = parseFloat(volume);
    if (isNaN(litros) || litros <= 0) return;

    const format = (v) => ((v * litros) / 1000).toFixed(1);

    adicionarMensagem("Produtos adicionais baseados no volume da piscina:");
    adicionarMensagem(
      `1) Redutor de pH: 5ml/1000L → ${format(5)}ml | 8ml/1000L → ${format(
        8
      )}ml`
    );
    adicionarMensagem(
      `2) Elevador de pH pó: 5ml/1000L → ${format(5)}ml | 10ml/1000L → ${format(
        10
      )}ml`
    );
    adicionarMensagem(
      `3) Elevador de pH líquido: 15ml/1000L → ${format(
        15
      )}ml | 20ml/1000L → ${format(20)}ml`
    );
    adicionarMensagem(
      `4) Elevador de alcalinidade: 17ml/1000L → ${format(17)}ml`
    );
    adicionarMensagem(`5) Reduz aspiração: 6ml/1000L → ${format(6)}ml`);
    adicionarMensagem(
      `6) Água turva ou manchas: 15ml/1000L → ${format(
        15
      )}ml | 50ml/1000L → ${format(50)}ml`
    );
    adicionarMensagem(
      `7) Água de poço: 15ml/1000L → ${format(15)}ml | 50ml/1000L → ${format(
        50
      )}ml`
    );
    adicionarMensagem(`8) Ultraclear: 10ml/1000L → ${format(10)}ml`);

    setStep(5);
  };

  const resetar = () => {
    setStep(0);
    setFormato("");
    setTratamentoTipo("");
    setVolume("");
    setDimensoes({
      comprimento: "",
      largura: "",
      profundidade: "",
      diametro: "",
    });
    setMensagens([]);
  };

  return (
    <div className=" phone1:w-[95%] desktop1:w-[60%] h-auto mx-auto font-mainFont bg-white p-6 rounded-xl space-y-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-primary uppercase tracking-wide">
        Calculadora
      </h2>

      {/* Caixa de mensagens */}
      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
        {mensagens.map((msg, i) => (
          <div
            key={i}
            className={`text-sm max-w-[80%] p-3 rounded-lg shadow-sm ${
              msg.tipo === "user"
                ? "bg-blue-100 ml-auto text-right"
                : "bg-gray-100 text-left"
            }`}
          >
            {msg.texto}
          </div>
        ))}
      </div>
      {digitando && (
        <div className="text-sm text-gray-400 animate-pulse px-3">
          Digitando...
        </div>
      )}

      <hr className="my-6 border-t border-gray-300" />

      {/* Etapas do chat */}
      {step === 0 && (
        <>
          <p className="text-lg h-10 font-medium text-gray-700">
            O que você deseja calcular?
          </p>
          <div className=" flex phone1:flex-col tablet1:flex-row gap-4 justify-between items-center ">
            <Buttons
              name="💧 Calcular o volume da piscina"
              onClick={() => {
                adicionarMensagem(
                  "Quero calcular o volume da água da piscina",
                  "user"
                );
                setStep(1);
              }}
              textSize="text-paragraph3"
            />
            <Buttons
              name="🧪 Calcular produtos necessários"
              onClick={() => {
                adicionarMensagem(
                  "Quero saber a quantidade de produtos que devo utilizar na piscina",
                  "user"
                );
                setStep(2);
              }}
              textSize="text-paragraph3"
            />
          </div>
        </>
      )}

      {step === 1 && (
        <>
          <p className="text-lg font-medium text-gray-700">
            Qual o formato da sua piscina?
          </p>
          <div className="flex phone1:flex-col tablet1:flex-row gap-4 justify-between items-center">
            <Buttons
              name="📏 Retangular ou quadrada"
              onClick={() => {
                setFormato("reta");
                adicionarMensagem(
                  "A minha piscina é retangular ou quadrada",
                  "user"
                );
                setStep(3);
              }}
              textSize="text-paragraph3"
            />
            <Buttons
              name="⚪ Redonda ou oval"
              onClick={() => {
                setFormato("redonda");
                adicionarMensagem("A minha piscina é redonda ou oval", "user");
                setStep(3);
              }}
              textSize="text-paragraph3"
            />
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <p className="text-lg font-medium text-gray-700">
            Qual o tipo de tratamento?
          </p>
          <div className="flex phone1:flex-col tablet1:flex-row gap-4 justify-between items-center">
            <Buttons
              name="🧼 Primeiro tratamento ou abandono"
              onClick={() => {
                setTratamentoTipo("primeiro");
                adicionarMensagem("Primeiro tratamento ou abandono", "user");
                setStep(1);
              }}
              textSize="text-paragraph3"
            />
            <Buttons
              name="🔄 Manutenção ou preventivo"
              onClick={() => {
                setTratamentoTipo("manutencao");
                adicionarMensagem("Manutenção ou preventivo", "user");
                setStep(1);
              }}
              textSize="text-paragraph3"
            />
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <p className="text-lg font-medium text-gray-700">
            Informe as medidas:
          </p>
          <div className="space-y-3">
            {formato === "reta" && (
              <>
                <div>
                  <label className="block text-sm font-semibold">
                    Comprimento (m)
                  </label>
                  <input
                    type="number"
                    value={dimensoes.comprimento}
                    onChange={(e) =>
                      setDimensoes({
                        ...dimensoes,
                        comprimento: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">
                    Largura (m)
                  </label>
                  <input
                    type="number"
                    value={dimensoes.largura}
                    onChange={(e) =>
                      setDimensoes({
                        ...dimensoes,
                        largura: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
              </>
            )}
            {formato === "redonda" && (
              <div>
                <label className="block text-sm font-semibold">
                  Diâmetro (m)
                </label>
                <input
                  type="number"
                  value={dimensoes.diametro}
                  onChange={(e) =>
                    setDimensoes({
                      ...dimensoes,
                      diametro: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-semibold">
                Profundidade (m)
              </label>
              <input
                type="number"
                value={dimensoes.profundidade}
                onChange={(e) =>
                  setDimensoes({
                    ...dimensoes,
                    profundidade: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <Buttons
              name="Calcular Volume"
              onClick={() => {
                const { comprimento, largura, profundidade, diametro } =
                  dimensoes;

                if (
                  (formato === "reta" &&
                    (!comprimento || !largura || !profundidade)) ||
                  (formato === "redonda" && (!diametro || !profundidade))
                ) {
                  alert(
                    "Por favor, preencha todas as medidas antes de continuar."
                  );
                  return;
                }

                let texto =
                  formato === "reta"
                    ? `Comprimento: ${comprimento}m, Largura: ${largura}m, Profundidade: ${profundidade}m`
                    : `Diâmetro: ${diametro}m, Profundidade: ${profundidade}m`;

                adicionarMensagem(texto, "user", false);
                calcularVolumePiscina();
              }}
            />
          </div>
        </>
      )}

      {step === 4 && (
        <div className="space-y-3">
          <p className="text-lg font-medium text-gray-700">
            Gostaria de saber sobre outros produtos?
          </p>
          <div className="flex phone1:flex-col tablet1:flex-row gap-4 justify-between items-center">
            <Buttons
              name="✅ Sim, mostrar produtos"
              onClick={() => {
                adicionarMensagem("Sim", "user");
                mostrarProdutosExtras();
              }}
              textSize="text-paragraph3"
            />
            <Buttons
              name="🔁 Não, reiniciar diálogo"
              onClick={resetar}
              textSize="text-paragraph3"
            />
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="pt-4">
          <Buttons
            name="🔁 Reiniciar Diálogo"
            onClick={resetar}
            textSize="text-paragraph3"
          />
        </div>
      )}
    </div>
  );
}
