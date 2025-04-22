import { useState, useEffect } from "react";
import Buttons from "./Buttons";

export default function RoundCalculator() {
  const [diametro, setDiametro] = useState("");
  const [diametro2, setDiametro2] = useState("");
  const [profundidade, setProfundidade] = useState("");
  const [resultado, setResultado] = useState("");
  const [mensagemConversao, setMensagemConversao] = useState("");

  useEffect(() => {
    setDiametro2(diametro);
  }, [diametro]);

  const calcularVolume = () => {
    const d = parseFloat(diametro);
    let p = parseFloat(profundidade);
    let conversaoFeita = false;

    if (isNaN(d) || isNaN(p)) {
      setResultado("Preencha todos os campos com valores válidos.");
      setMensagemConversao("");
      return;
    }

    if (p > 10) {
      p = p / 100;
      conversaoFeita = true;
    }

    const volumeMetrosCubicos = 0.785 * Math.pow(d, 2) * p;
    const volumeLitros = volumeMetrosCubicos * 1000;

    setResultado(`Volume: ${volumeLitros.toFixed(2)} litros`);

    if (conversaoFeita) {
      setMensagemConversao(
        "* A profundidade foi convertida automaticamente de centímetros para metros."
      );
    } else {
      setMensagemConversao("");
    }
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white shadow-md rounded-xl">
      <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">
        Calculadora de Volume (Piscina Circular)
      </h2>

      <label className="block mb-2 text-gray-700">Diâmetro (m):</label>
      <input
        type="number"
        value={diametro}
        onChange={(e) => setDiametro(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />

      {/* <label className="block mb-2 text-gray-700">Diâmetro (m):</label>
      <input
        type="number"
        value={diametro2}
        readOnly
        className="w-full p-2 mb-4 bg-gray-100 border border-gray-300 rounded-md"
      /> */}

      <label className="block mb-2 text-gray-700">Profundidade (m):</label>
      <input
        type="number"
        value={profundidade}
        onChange={(e) => setProfundidade(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />

      <Buttons
        onClick={calcularVolume}
        className="w-full py-2 text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
        Calcular
        Volume
      />

      {resultado && (
        <div className="mt-4 text-lg font-semibold text-center text-gray-800">
          {resultado}
        </div>
      )}

      {mensagemConversao && (
        <div className="mt-2 text-sm text-center text-yellow-600">
          {mensagemConversao}
        </div>
      )}
    </div>
  );
}
