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
      }, 5000);
    } else {
      setMensagens((prev) => [...prev, { texto, tipo }]);
    }
  };

  const calcularVolumePiscina = () => {
    let litros = 0;
    const p = parseFloat(dimensoes.profundidade);

    if (formato === "reta") {
      // comprimento x largura x a profundidade,
      const c = parseFloat(dimensoes.comprimento);
      const l = parseFloat(dimensoes.largura);
      litros = c * l * p;
    } else if (formato === "redonda") {
      const d = parseFloat(dimensoes.diametro);
      litros = d * d * p * 0.785;
    } else if (formato === "oval") {
      const c = parseFloat(dimensoes.comprimento);
      const l = parseFloat(dimensoes.largura);
      litros = c * l * p * 0.785;
    }

    if (isNaN(litros) || litros <= 0) {
      adicionarMensagem("Por favor, insira medidas válidas.");
      return;
    }

    setVolume(litros.toFixed(3));
    adicionarMensagem(
      `${litros.toFixed(3)} mil litros é o volume de água da sua piscina.`
    );

    // Função de calcular produtos
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

      if (formato === "reta") {
        adicionarMensagem(`- Cloro Granulado Tradicional: ${format(14)}g`);
        adicionarMensagem(`- Dicloro Puro ou Multifuncões: ${format(10)}g`);
        adicionarMensagem(`- Cloro Granulado 10 em 1: ${format(18)}g`);
        adicionarMensagem(`- Algicida de choque: ${format(5)}ml`);
        adicionarMensagem(`- Clarificante: ${format(6)}ml`);
        adicionarMensagem(`- Elimina Óleo: ${format(14)}ml`);
      } else if (formato === "redonda") {
        adicionarMensagem(`- Cloro Granulado Tradicional: ${format(14)}g`);
        adicionarMensagem(`- Dicloro Puro ou Multifuncões: ${format(10)}g`);
        adicionarMensagem(`- Cloro Granulado 10 em 1: ${format(18)}g`);
        adicionarMensagem(`- Algicida de choque: ${format(5)}ml`);
        adicionarMensagem(`- Clarificante: ${format(6)}ml`);
        adicionarMensagem(`- Elimina Óleo: ${format(14)}ml`);
      } else if (formato === "oval") {
        adicionarMensagem(`- Cloro Granulado Tradicional: ${format(14)}g`);
        adicionarMensagem(`- Dicloro Puro ou Multifuncões: ${format(10)}g`);
        adicionarMensagem(`- Cloro Granulado 10 em 1: ${format(18)}g`);
        adicionarMensagem(`- Algicida de choque: ${format(5)}ml`);
        adicionarMensagem(`- Clarificante: ${format(6)}ml`);
        adicionarMensagem(`- Elimina Óleo: ${format(14)}ml`);
      }
    } else {
      adicionarMensagem("Produtos para Manutenção:");

      if (formato === "reta") {
        adicionarMensagem(`- Cloro Granulado Tradicional: ${format(5)}g `);
        adicionarMensagem(`- Dicloro puro ou multifunções: ${format(5)}g `);
        adicionarMensagem(`- Cloro Granulado 10 em 1: ${format(9)}g `);
        adicionarMensagem(`- Algicida de manutenção: ${format(5)}ml `);
        adicionarMensagem(`- Clarificante: ${format(3)}ml `);
        adicionarMensagem(`- Elimina Óleo: ${format(7)}ml`);
      } else if (formato === "redonda") {
        adicionarMensagem(`- Cloro Granulado Tradicional: ${format(5)}g `);
        adicionarMensagem(`- Dicloro puro ou multifunções: ${format(5)}g `);
        adicionarMensagem(`- Cloro Granulado 10 em 1: ${format(9)}g `);
        adicionarMensagem(`- Algicida de manutenção: ${format(5)}ml `);
        adicionarMensagem(`- Clarificante: ${format(3)}ml `);
        adicionarMensagem(`- Elimina Óleo: ${format(7)}ml`);
      } else if (formato === "oval") {
        adicionarMensagem(`- Cloro Granulado Tradicional: ${format(5)}g `);
        adicionarMensagem(`- Dicloro puro ou multifunções: ${format(5)}g `);
        adicionarMensagem(`- Cloro Granulado 10 em 1: ${format(9)}g `);
        adicionarMensagem(`- Algicida de manutenção: ${format(5)}ml `);
        adicionarMensagem(`- Clarificante: ${format(3)}ml `);
        adicionarMensagem(`- Elimina Óleo: ${format(7)}ml`);
      }
    }
  };

  // const mostrarProdutosExtras = () => {
  //   const litros = parseFloat(volume);
  //   if (isNaN(litros) || litros <= 0) return;

  //   const format = (v) => ((v * litros) / 1000).toFixed(1);

  //   adicionarMensagem("Produtos adicionais baseados no volume da piscina:");
  //   adicionarMensagem(
  //     `1) Redutor de pH: 5ml/1000L → ${format(5)}ml | 8ml/1000L → ${format(
  //       8
  //     )}ml`
  //   );
  //   adicionarMensagem(
  //     `2) Elevador de pH pó: 5ml/1000L → ${format(5)}ml | 10ml/1000L → ${format(
  //       10
  //     )}ml`
  //   );
  //   adicionarMensagem(
  //     `3) Elevador de pH líquido: 15ml/1000L → ${format(
  //       15
  //     )}ml | 20ml/1000L → ${format(20)}ml`
  //   );
  //   adicionarMensagem(
  //     `4) Elevador de alcalinidade: 17ml/1000L → ${format(17)}ml`
  //   );
  //   adicionarMensagem(`5) Reduz aspiração: 6ml/1000L → ${format(6)}ml`);
  //   adicionarMensagem(
  //     `6) Água turva ou manchas: 15ml/1000L → ${format(
  //       15
  //     )}ml | 50ml/1000L → ${format(50)}ml`
  //   );
  //   adicionarMensagem(
  //     `7) Água de poço: 15ml/1000L → ${format(15)}ml | 50ml/1000L → ${format(
  //       50
  //     )}ml`
  //   );
  //   adicionarMensagem(`8) Ultraclear: 10ml/1000L → ${format(10)}ml`);

  //   setStep(5);
  // };

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

  function calcularDosagem(volumeLitros, dosagemPor1000L) {
    // volumeLitros deve ser número puro, em litros
    return ((volumeLitros / 1000) * dosagemPor1000L).toFixed(2);
  }

  // Função para converter volume para número em litros

  return (
    <div className="phone1:w-[95%] desktop1:w-[60%] h-auto mx-auto font-mainFont bg-white p-6 rounded-xl space-y-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-primary uppercase tracking-wide">
        Calculadora
      </h2>

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

      {/* Lógica de Pergunta inicial */}
      {step === 0 && (
        <>
          <p className="text-lg h-10 font-medium text-gray-700">
            O que você deseja calcular?
          </p>
          <div className="flex phone1:flex-col tablet1:flex-row gap-4 justify-between items-center">
            <Buttons
              name="Somente o volume de água da minha piscina"
              onClick={() => {
                adicionarMensagem(
                  "Quero calcular o volume da água da piscina",
                  "user"
                );
                setStep(1);
              }}
              textSize="text-paragraph1"
              className=""
            />
            <Buttons
              name="O volume de água e a quantidade de produtos a serem utilizados na minha piscina"
              onClick={() => {
                adicionarMensagem(
                  "Quero saber a quantidade de produtos que devo utilizar na piscina",
                  "user"
                );
                setStep(6);
              }}
              textSize="text-paragraph1"
            />
          </div>
        </>
      )}

      {/* Lógica de Pergunta para formato da piscina */}
      {step === 1 && (
        <>
          <p className="text-lg font-medium text-gray-700">
            Qual o formato da sua piscina?
          </p>
          <div className="flex phone1:flex-col tablet1:flex-row gap-4 justify-between items-center">
            <Buttons
              name="Sua piscina é quadrada ou retangula?"
              onClick={() => {
                setFormato("reta");
                adicionarMensagem(
                  "A minha piscina é retangular ou quadrada",
                  "user"
                );
                setStep(3);
              }}
              textSize="text-paragraph1"
            />
            <Buttons
              name="Sua piscina é redonda?"
              onClick={() => {
                setFormato("redonda");
                adicionarMensagem("A minha piscina é redonda", "user");
                setStep(3);
              }}
              textSize="text-paragraph1"
            />
            <Buttons
              name="Sua piscina é oval?"
              onClick={() => {
                setFormato("oval");
                adicionarMensagem("A minha piscina é oval", "user");
                setStep(3);
              }}
              textSize="text-paragraph1"
            />
          </div>
        </>
      )}
      {/* Lógica de tratamento ou abandono */}
      {step === 2 && (
        <>
          <p className="text-lg font-medium text-gray-700">
            Qual o tipo de tratamento?
          </p>
          <div className="flex phone1:flex-col tablet1:flex-row gap-4 justify-between items-center">
            <Buttons
              name="Primeiro tratamento ou abandono"
              onClick={() => {
                setTratamentoTipo("primeiro");
                adicionarMensagem("Primeiro tratamento ou abandono", "user");
                calcularProdutos();
              }}
              textSize="text-paragraph1"
            />
            <Buttons
              name="Manutenção ou preventivo"
              onClick={() => {
                setTratamentoTipo("manutencao");
                adicionarMensagem("Manutenção ou preventivo", "user");
                calcularProdutos();
              }}
              textSize="text-paragraph1"
            />
          </div>
        </>
      )}

      {/* Lógica de Medidas inseridas pelo Usuáo */}
      {step === 3 && (
        <>
          <p className="text-lg font-medium text-gray-700">
            Informe as medidas:
          </p>
          <div className="space-y-3">
            {(formato === "reta" || formato === "oval") && (
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
                      setDimensoes({ ...dimensoes, largura: e.target.value })
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
                    setDimensoes({ ...dimensoes, diametro: e.target.value })
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
                  setDimensoes({ ...dimensoes, profundidade: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <Buttons
              className="m-auto"
              textSize="text-paragraph1"
              name="Calcular Volume"
              onClick={() => {
                const { comprimento, largura, profundidade, diametro } =
                  dimensoes;
                if (
                  (formato === "reta" &&
                    (!comprimento || !largura || !profundidade)) ||
                  (formato === "oval" &&
                    (!comprimento || !largura || !profundidade)) ||
                  (formato === "redonda" && (!diametro || !profundidade))
                ) {
                  alert(
                    "Por favor, preencha todas as medidas antes de continuar."
                  );
                  return;
                }

                let texto =
                  formato === "reta" || formato === "oval"
                    ? `Comprimento: ${comprimento}m, Largura: ${largura}m, Profundidade: ${profundidade}m`
                    : `Diâmetro: ${diametro}m, Profundidade: ${profundidade}m`;

                adicionarMensagem(texto, "user", false);
                calcularVolumePiscina();
              }}
            />
          </div>
        </>
      )}

      {/* Lógica de Pergunta para cálculo dos produtos */}
      {step === 4 && (
        <div className="space-y-3">
          <p className="text-lg font-medium text-gray-700">
            Gostaria de saber os produtos a serem utilizados na sua piscina?
          </p>
          <div className="flex phone1:flex-col tablet1:flex-row gap-4 justify-between items-center">
            <Buttons
              name="✅ Sim, mostrar produtos"
              onClick={() => {
                adicionarMensagem("Sim", "user");
                // mostrarProdutosExtras();
                setStep(2);
              }}
              textSize="text-paragraph1"
            />
            <Buttons
              name="🔁 Não, era somente isso"
              onClick={() => {
                adicionarMensagem("Não", "user");
                adicionarMensagem(
                  "Então aqui finalizamos o cálculo, obrigado."
                );
                setStep(5);
              }}
              textSize="text-paragraph1"
            />
          </div>
        </div>
      )}

      {/* Lógica de Reset */}
      {step === 5 && (
        <div className=" m-auto w-full">
          <Buttons
            name="🔁 Reiniciar Diálogo"
            onClick={resetar}
            textSize="text-paragraph1"
            className="flex m-auto"
          />
        </div>
      )}

      {/* Lógica de tratamento ou abandono para botão inicial secundário */}
      {step === 6 && (
        <>
          <p className="text-lg font-medium text-gray-700">
            Qual o tipo de tratamento?
          </p>
          <div className="flex phone1:flex-col tablet1:flex-row gap-4 justify-between items-center">
            <Buttons
              name="Primeiro tratamento ou abandono"
              onClick={() => {
                setTratamentoTipo("primeiro");
                adicionarMensagem("Primeiro tratamento ou abandono", "user");
                setStep(7);
              }}
              textSize="text-paragraph1"
            />
            <Buttons
              name="Manutenção ou preventivo"
              onClick={() => {
                setTratamentoTipo("manutencao");
                adicionarMensagem("Manutenção ou preventivo", "user");
                setStep(7);
              }}
              textSize="text-paragraph1"
            />
          </div>
        </>
      )}

      {/* Lógica de Pergunta para formato da piscina */}
      {step === 7 && (
        <>
          <p className="text-lg font-medium text-gray-700">
            Qual o formato da sua piscina?
          </p>
          <div className="flex phone1:flex-col tablet1:flex-row gap-4 justify-between items-center">
            <Buttons
              name="Sua piscina é quadrada ou retangula?"
              onClick={() => {
                setFormato("reta");
                adicionarMensagem(
                  "A minha piscina é retangular ou quadrada",
                  "user"
                );
                setStep(8);
              }}
              textSize="text-paragraph1"
            />
            <Buttons
              name="Sua piscina é redonda?"
              onClick={() => {
                setFormato("redonda");
                adicionarMensagem("A minha piscina é redonda", "user");
                setStep(8);
              }}
              textSize="text-paragraph1"
            />
            <Buttons
              name="Sua piscina é oval?"
              onClick={() => {
                setFormato("oval");
                adicionarMensagem("A minha piscina é oval", "user");
                setStep(8);
              }}
              textSize="text-paragraph1"
            />
          </div>
        </>
      )}

      {/* Lógica de Medidas inseridas pelo Usuáo sobre Tratamento */}
      {step === 8 && (
        <>
          <p className="text-lg font-medium text-gray-700">
            Informe as medidas:
          </p>
          <div className="space-y-3">
            {(formato === "reta" || formato === "oval") && (
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
                      setDimensoes({ ...dimensoes, largura: e.target.value })
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
                    setDimensoes({ ...dimensoes, diametro: e.target.value })
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
                  setDimensoes({ ...dimensoes, profundidade: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <Buttons
              className="m-auto"
              textSize="text-paragraph1"
              name="Calcular Volume e Produtos"
              onClick={() => {
                const { comprimento, largura, profundidade, diametro } =
                  dimensoes;
                if (
                  (formato === "reta" &&
                    (!comprimento || !largura || !profundidade)) ||
                  (formato === "oval" &&
                    (!comprimento || !largura || !profundidade)) ||
                  (formato === "redonda" && (!diametro || !profundidade))
                ) {
                  alert(
                    "Por favor, preencha todas as medidas antes de continuar."
                  );
                  return;
                }

                adicionarMensagem(
                  formato === "reta" || formato === "oval"
                    ? `Comprimento: ${comprimento}m, Largura: ${largura}m, Profundidade: ${profundidade}m`
                    : `Diâmetro: ${diametro}m, Profundidade: ${profundidade}m`,
                  "user",
                  false
                );

                // Calcula o volume
                let litros = 0;
                const p = parseFloat(profundidade);

                if (formato === "reta") {
                  litros = parseFloat(comprimento) * parseFloat(largura) * p;
                } else if (formato === "redonda") {
                  litros =
                    parseFloat(diametro) * parseFloat(diametro) * p * 0.785;
                } else if (formato === "oval") {
                  litros =
                    parseFloat(comprimento) * parseFloat(largura) * p * 0.785;
                }

                if (isNaN(litros) || litros <= 0) {
                  adicionarMensagem("Por favor, insira medidas válidas.");
                  return;
                }

                setVolume(litros.toFixed(3));

                // Exibe o volume antes dos produtos
                adicionarMensagem(
                  `${litros.toFixed(
                    3
                  )} mil litros é o volume de água da sua piscina.`
                );

                // Calcula e mostra os produtos
                calcularProdutos(litros);

                // --- Adiciona produtos circunstanciais ---
                if (formato === "reta") {
                  if (tratamentoTipo === "primeiro") {
                    adicionarMensagem(
                      <h1 className="text-[16px] text-primary font-bold">
                        Em qualquer dos casos, além do que já foi mostrado, é
                        preciso adicionar:
                      </h1>
                    );

                    adicionarMensagem(
                      <div>
                        <h1 className="font-medium text-primary">
                          Redutor de pH
                        </h1>
                        <p>
                          Se pH estiver entre 7ppm e 8ppm:{" "}
                          {calcularDosagem(volume, 5)} ml <br />
                          Se pH estiver acima de 8ppm:{" "}
                          {calcularDosagem(volume, 8)} ml
                        </p>
                      </div>
                    );

                    adicionarMensagem(
                      <div>
                        <h1 className="font-medium text-primary">
                          Elevador de pH em pó
                        </h1>
                        <p>
                          Se pH estiver entre 6,8ppm e 7ppm:{" "}
                          {calcularDosagem(volume, 5)} g <br />
                          Se pH estiver abaixo de 6,8ppm:{" "}
                          {calcularDosagem(volume, 10)} g
                        </p>
                      </div>
                    );

                    adicionarMensagem(
                      <div>
                        <h1 className="font-medium text-primary">
                          Elevador de pH líquido
                        </h1>
                        <p>
                          Se pH estiver entre 6,8ppm e 7ppm:{" "}
                          {calcularDosagem(volume, 15)} ml <br />
                          Se pH estiver abaixo de 6,8ppm:{" "}
                          {calcularDosagem(volume, 20)} ml
                        </p>
                      </div>
                    );

                    adicionarMensagem(
                      <div>
                        <h1 className="font-medium text-primary">
                          Elevador de alcalinidade em pó
                        </h1>
                        <p>
                          - {calcularDosagem(volume, 17)} g até elevar a
                          alcalinidade
                        </p>
                      </div>
                    );

                    adicionarMensagem(
                      <div>
                        <h1 className="font-medium text-primary">
                          Auxiliar de aspiração
                        </h1>
                        <p>- {calcularDosagem(volume, 6)} ml</p>
                      </div>
                    );

                    adicionarMensagem(
                      <div>
                        <h1 className="font-medium text-primary">
                          Água turva / manchas
                        </h1>
                        <p>
                          Fundo visível: {calcularDosagem(volume, 15)} ml <br />
                          Fundo invisível: {calcularDosagem(volume, 50)} ml
                        </p>
                      </div>
                    );

                    adicionarMensagem(
                      <div>
                        <h1 className="font-medium text-primary">
                          Eliminador de metais
                        </h1>
                        <p>
                          Fundo visível: {calcularDosagem(volume, 15)} ml <br />
                          Fundo invisível: {calcularDosagem(volume, 50)} ml
                        </p>
                      </div>
                    );

                    adicionarMensagem(
                      <div>
                        <h1 className="font-medium text-primary">
                          Eliminador de algas
                        </h1>
                        <p>
                          - {calcularDosagem(volume, 10)} ml sempre que
                          necessário
                        </p>
                      </div>
                    );

                    adicionarMensagem(
                      <div>
                        <h1 className="font-medium text-primary">
                          Limpa bordas
                        </h1>
                        <p>Usar quantidade razoável em esponja</p>
                      </div>
                    );
                  }

                  if (tratamentoTipo === "manutencao") {
                    adicionarMensagem(
                      <div>
                        <h1 className="font-medium text-primary">
                          Cloro granulado
                        </h1>
                        <p>- {calcularDosagem(volume, 4)} g diariamente</p>
                      </div>
                    );
                  }
                }

                if (formato === "redonda") {
                  if (tratamentoTipo === "primeiro") {
                    adicionarMensagem(
                      <h1 className="text-[16px] text-primary font-bold">
                        Em qualquer dos casos, além do que já foi mostrado, é
                        preciso adicionar:
                      </h1>
                    );

                    adicionarMensagem(
                      <div>
                        <h1 className="font-medium text-primary">
                          Redutor de pH
                        </h1>
                        <p>
                          Se pH estiver entre 7ppm e 8ppm:{" "}
                          {calcularDosagem(volume, 5)} ml <br />
                          Se pH estiver acima de 8ppm:{" "}
                          {calcularDosagem(volume, 8)} ml
                        </p>
                      </div>
                    );

                    adicionarMensagem(
                      <div>
                        <h1 className="font-medium text-primary">
                          Elevador de pH em pó
                        </h1>
                        <p>
                          Se pH estiver entre 6,8ppm e 7ppm:{" "}
                          {calcularDosagem(volume, 5)} g <br />
                          Se pH estiver abaixo de 6,8ppm:{" "}
                          {calcularDosagem(volume, 10)} g
                        </p>
                      </div>
                    );

                    adicionarMensagem(
                      <div>
                        <h1 className="font-medium text-primary">
                          Elevador de pH líquido
                        </h1>
                        <p>
                          Se pH estiver entre 6,8ppm e 7ppm:{" "}
                          {calcularDosagem(volume, 15)} ml <br />
                          Se pH estiver abaixo de 6,8ppm:{" "}
                          {calcularDosagem(volume, 20)} ml
                        </p>
                      </div>
                    );

                    adicionarMensagem(
                      <div>
                        <h1 className="font-medium text-primary">
                          Auxiliar de aspiração
                        </h1>
                        <p>- {calcularDosagem(volume, 6)} ml</p>
                      </div>
                    );
                  }

                  if (tratamentoTipo === "manutencao") {
                    adicionarMensagem(
                      <div>
                        <h1 className="font-medium text-primary">
                          Cloro granulado
                        </h1>
                        <p>- {calcularDosagem(volume, 4)} g diariamente</p>
                      </div>
                    );
                  }
                }

                if (formato === "oval") {
                  if (tratamentoTipo === "primeiro") {
                    adicionarMensagem(
                      <h1 className="text-[16px] text-primary font-bold">
                        Em qualquer dos casos, além do que já foi mostrado, é
                        preciso adicionar:
                      </h1>
                    );

                    adicionarMensagem(
                      <div>
                        <h1 className="font-medium text-primary">
                          Redutor de pH
                        </h1>
                        <p>
                          Se pH estiver entre 7ppm e 8ppm:{" "}
                          {calcularDosagem(volume, 5)} ml <br />
                          Se pH estiver acima de 8ppm:{" "}
                          {calcularDosagem(volume, 8)} ml
                        </p>
                      </div>
                    );

                    adicionarMensagem(
                      <div>
                        <h1 className="font-medium text-primary">
                          Elevador de pH em pó
                        </h1>
                        <p>
                          Se pH estiver entre 6,8ppm e 7ppm:{" "}
                          {calcularDosagem(volume, 5)} g <br />
                          Se pH estiver abaixo de 6,8ppm:{" "}
                          {calcularDosagem(volume, 10)} g
                        </p>
                      </div>
                    );

                    adicionarMensagem(
                      <div>
                        <h1 className="font-medium text-primary">
                          Elevador de pH líquido
                        </h1>
                        <p>
                          Se pH estiver entre 6,8ppm e 7ppm:{" "}
                          {calcularDosagem(volume, 15)} ml <br />
                          Se pH estiver abaixo de 6,8ppm:{" "}
                          {calcularDosagem(volume, 20)} ml
                        </p>
                      </div>
                    );

                    adicionarMensagem(
                      <div>
                        <h1 className="font-medium text-primary">
                          Auxiliar de aspiração
                        </h1>
                        <p>- {calcularDosagem(volume, 6)} ml</p>
                      </div>
                    );
                  }

                  if (tratamentoTipo === "manutencao") {
                    adicionarMensagem(
                      <div>
                        <h1 className="font-medium text-primary">
                          Cloro granulado
                        </h1>
                        <p>- {calcularDosagem(volume, 4)} g diariamente</p>
                      </div>
                    );
                  }
                }

                // Vai para o step final
                setStep(5);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
