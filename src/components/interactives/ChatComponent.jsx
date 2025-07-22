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
    <div className="max-w-md mx-auto bg-white p-4 shadow-md rounded space-y-4">
      <h2 className="text-xl font-bold">CALCULADORA</h2>

      <div className="space-y-2">
        {mensagens.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded text-sm ${
              msg.tipo === "user"
                ? "bg-blue-100 text-right"
                : "bg-gray-100 text-left"
            }`}
          >
            {msg.texto}
          </div>
        ))}
      </div>

      {step === 0 && (
        <div className="space-y-2">
          <p className="font-medium">O que você deseja calcular?</p>
          <button
            onClick={() => {
              adicionarMensagem(
                "Quero calcular o volume da água da piscina",
                "user"
              );
              setStep(1);
            }}
            className="w-full bg-gray-100 hover:bg-gray-200 p-2 rounded"
          >
            1) O Volume da água da minha piscina
          </button>
          <button
            onClick={() => {
              adicionarMensagem(
                "Quero saber a quantidade de produtos que devo utilizar na piscina",
                "user"
              );
              setStep(2);
            }}
            className="w-full bg-gray-100 hover:bg-gray-200 p-2 rounded"
          >
            2) A quantidade de produtos que devo utilizar na minha piscina
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-2">
          <p className="font-medium">Qual o formato da sua piscina?</p>
          <button
            onClick={() => {
              setFormato("reta");
              adicionarMensagem(
                "A minha piscina é retangular ou quadrada",
                "user"
              );
              setStep(3);
            }}
            className="w-full bg-gray-100 hover:bg-gray-200 p-2 rounded"
          >
            3) A minha piscina é retangular ou quadrada
          </button>
          <button
            onClick={() => {
              setFormato("redonda");
              adicionarMensagem("A minha piscina é redonda ou oval", "user");
              setStep(3);
            }}
            className="w-full bg-gray-100 hover:bg-gray-200 p-2 rounded"
          >
            4) A minha piscina é redonda ou oval
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-2">
          <p className="font-medium">Qual o tipo de tratamento?</p>
          <button
            onClick={() => {
              setTratamentoTipo("primeiro");
              adicionarMensagem("Primeiro tratamento ou abandono", "user");
              setStep(1);
            }}
            className="w-full bg-gray-100 hover:bg-gray-200 p-2 rounded"
          >
            5) Primeiro tratamento ou abandono
          </button>
          <button
            onClick={() => {
              setTratamentoTipo("manutencao");
              adicionarMensagem("Manutenção ou preventivo", "user");
              setStep(1);
            }}
            className="w-full bg-gray-100 hover:bg-gray-200 p-2 rounded"
          >
            6) Manutenção ou preventivo
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-2">
          {formato === "reta" && (
            <>
              <input
                type="number"
                placeholder="Comprimento (m)"
                value={dimensoes.comprimento}
                onChange={(e) =>
                  setDimensoes({ ...dimensoes, comprimento: e.target.value })
                }
                className="w-full border rounded p-2"
              />
              <input
                type="number"
                placeholder="Largura (m)"
                value={dimensoes.largura}
                onChange={(e) =>
                  setDimensoes({ ...dimensoes, largura: e.target.value })
                }
                className="w-full border rounded p-2"
              />
            </>
          )}

          {formato === "redonda" && (
            <input
              type="number"
              placeholder="Diâmetro (m)"
              value={dimensoes.diametro}
              onChange={(e) =>
                setDimensoes({ ...dimensoes, diametro: e.target.value })
              }
              className="w-full border rounded p-2"
            />
          )}

          <input
            type="number"
            placeholder="Profundidade (m)"
            value={dimensoes.profundidade}
            onChange={(e) =>
              setDimensoes({ ...dimensoes, profundidade: e.target.value })
            }
            className="w-full border rounded p-2"
          />

          <button
            onClick={() => {
              adicionarMensagem(
                `Profundidade: ${dimensoes.profundidade}m`,
                "user"
              );
              calcularVolumePiscina();
              setStep(4);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Calcular
          </button>
        </div>
      )}

      {step === 4 && (
        <button
          onClick={resetar}
          className="w-full mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Reiniciar Diálogo
        </button>
      )}
    </div>
  );
}
