import { useState } from "react";

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

  const adicionarMensagem = (texto, tipo = "bot") => {
    setMensagens((prev) => [...prev, { texto, tipo }]);
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

    if (tratamentoTipo === "primeiro") {
      adicionarMensagem("Produtos para Primeiro Tratamento:");
      adicionarMensagem(
        `- Cloro Granulado Tradicional ou Dicloro: ${(10 * litros) / 1000}g`
      );
      adicionarMensagem(
        `- Dicloro puro ou multifunções: ${(10 * litros) / 1000}g`
      );
      adicionarMensagem(`- Cloro Granulado 10 em 1: ${(18 * litros) / 1000}g`);
      adicionarMensagem(`- Algicida de manutenção: ${(10 * litros) / 1000}ml`);
      adicionarMensagem(`- Clarificante: ${(6 * litros) / 1000}ml`);
      adicionarMensagem(`- Elimina Óleo: ${(14 * litros) / 1000}ml`);
    } else {
      adicionarMensagem("Produtos para Manutenção:");
      adicionarMensagem(
        `- Cloro Granulado Tradicional ou Dicloro: ${
          (5 * litros) / 1000
        }g (3x por semana)`
      );
      adicionarMensagem(
        `- Dicloro puro ou multifunções: ${
          (5 * litros) / 1000
        }g (3x por semana)`
      );
      adicionarMensagem(
        `- Cloro Granulado 10 em 1: ${(10 * litros) / 1000}g (3x por semana)`
      );
      adicionarMensagem(
        `- Algicida de manutenção: ${(5 * litros) / 1000}ml (1x por semana)`
      );
      adicionarMensagem(
        `- Clarificante: ${(1.5 * litros) / 1000}ml (1x por semana)`
      );
      adicionarMensagem(
        `- Elimina Óleo: ${(7 * litros) / 1000}ml (quando necessário)`
      );
    }
  };

  const mostrarProdutosExtras = () => {
    const litros = parseFloat(volume);
    if (isNaN(litros) || litros <= 0) return;

    adicionarMensagem("Produtos adicionais baseados no volume da piscina:");
    adicionarMensagem(
      `1) Redutor de pH: 5ml/1000L → ${(5 * litros) / 1000}ml | 8ml/1000L → ${
        (8 * litros) / 1000
      }ml`
    );
    adicionarMensagem(
      `2) Elevador de pH pó: 5ml/1000L → ${
        (5 * litros) / 1000
      }ml | 10ml/1000L → ${(10 * litros) / 1000}ml`
    );
    adicionarMensagem(
      `3) Elevador de pH líquido: 15ml/1000L → ${
        (15 * litros) / 1000
      }ml | 20ml/1000L → ${(20 * litros) / 1000}ml`
    );
    adicionarMensagem(
      `4) Elevador de alcalinidade: 17ml/1000L → ${(17 * litros) / 1000}ml`
    );
    adicionarMensagem(
      `5) Reduz aspiração: 6ml/1000L → ${(6 * litros) / 1000}ml`
    );
    adicionarMensagem(
      `6) Água turva ou manchas: 15ml/1000L → ${
        (15 * litros) / 1000
      }ml | 50ml/1000L → ${(50 * litros) / 1000}ml`
    );
    adicionarMensagem(
      `7) Água de poço: 15ml/1000L → ${(15 * litros) / 1000}ml | 50ml/1000L → ${
        (50 * litros) / 1000
      }ml`
    );
    adicionarMensagem(`8) Ultraclear: 10ml/1000L → ${(10 * litros) / 1000}ml`);

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
    <div className="max-w-xl mx-auto font-mainFont bg-white p-6 rounded-xl space-y-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-primary uppercase tracking-wide">
        Calculadora
      </h2>

      {/* Caixa de mensagens */}
      <div className="space-y-3 max-h-96 overflow-y-auto  pr-2">
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

      {/* Etapas do chat */}
      <div className="space-y-4">
        {step === 0 && (
          <>
            <p className="text-lg font-medium text-gray-700">
              O que você deseja calcular?
            </p>
            <div className="space-y-2">
              <button
                onClick={() => {
                  adicionarMensagem(
                    "Quero calcular o volume da água da piscina",
                    "user"
                  );
                  setStep(1);
                }}
                className="w-full bg-blue-50 hover:bg-blue-100 p-3 rounded-lg border border-blue-200"
              >
                💧 Calcular o volume da piscina
              </button>
              <button
                onClick={() => {
                  adicionarMensagem(
                    "Quero saber a quantidade de produtos que devo utilizar na piscina",
                    "user"
                  );
                  setStep(2);
                }}
                className="w-full bg-blue-50 hover:bg-blue-100 p-3 rounded-lg border border-blue-200"
              >
                🧪 Calcular produtos necessários
              </button>
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <p className="text-lg font-medium text-gray-700">
              Qual o formato da sua piscina?
            </p>
            <div className="space-y-2">
              <button
                onClick={() => {
                  setFormato("reta");
                  adicionarMensagem(
                    "A minha piscina é retangular ou quadrada",
                    "user"
                  );
                  setStep(3);
                }}
                className="w-full bg-blue-50 hover:bg-blue-100 p-3 rounded-lg border border-blue-200"
              >
                📏 Retangular ou quadrada
              </button>
              <button
                onClick={() => {
                  setFormato("redonda");
                  adicionarMensagem(
                    "A minha piscina é redonda ou oval",
                    "user"
                  );
                  setStep(3);
                }}
                className="w-full bg-blue-50 hover:bg-blue-100 p-3 rounded-lg border border-blue-200"
              >
                ⚪ Redonda ou oval
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <p className="text-lg font-medium text-gray-700">
              Qual o tipo de tratamento?
            </p>
            <div className="space-y-2">
              <button
                onClick={() => {
                  setTratamentoTipo("primeiro");
                  adicionarMensagem("Primeiro tratamento ou abandono", "user");
                  setStep(1);
                }}
                className="w-full bg-blue-50 hover:bg-blue-100 p-3 rounded-lg border border-blue-200"
              >
                🧼 Primeiro tratamento ou abandono
              </button>
              <button
                onClick={() => {
                  setTratamentoTipo("manutencao");
                  adicionarMensagem("Manutenção ou preventivo", "user");
                  setStep(1);
                }}
                className="w-full bg-blue-50 hover:bg-blue-100 p-3 rounded-lg border border-blue-200"
              >
                🔄 Manutenção ou preventivo
              </button>
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
              <button
                onClick={() => {
                  adicionarMensagem(
                    `Profundidade: ${dimensoes.profundidade}m`,
                    "user"
                  );
                  calcularVolumePiscina();
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold"
              >
                Calcular Volume
              </button>
            </div>
          </>
        )}

        {step === 4 && (
          <div className="space-y-3">
            <p className="text-lg font-medium text-gray-700">
              Gostaria de saber sobre outros produtos?
            </p>
            <button
              onClick={() => {
                adicionarMensagem("Sim", "user");
                mostrarProdutosExtras();
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg font-semibold"
            >
              ✅ Sim, mostrar produtos
            </button>
            <button
              onClick={resetar}
              className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg font-semibold"
            >
              🔁 Não, reiniciar diálogo
            </button>
          </div>
        )}

        {step === 5 && (
          <div className="pt-4">
            <button
              onClick={resetar}
              className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg font-semibold"
            >
              🔁 Reiniciar Diálogo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
