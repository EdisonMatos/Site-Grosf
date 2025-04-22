import { useState } from "react";
import Buttons from "./Buttons";

export default function SquareCalculator() {
  const [comprimento, setComprimento] = useState("");
  const [largura, setLargura] = useState("");
  const [profundidade, setProfundidade] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularVolume = () => {
    const c = parseFloat(comprimento);
    const l = parseFloat(largura);
    const p = parseFloat(profundidade);

    if (isNaN(c) || isNaN(l) || isNaN(p)) {
      setResultado("Preencha todos os campos com valores válidos.");
      return;
    }

    // Cálculo em metros cúbicos
    const volumeM3 = c * l * p;
    // Convertendo de metros cúbicos para litros
    const volumeLitros = volumeM3 * 1000;

    setResultado(
      <div>
        Resultado: <br />
        Volume: {volumeLitros.toFixed(2)} litros (
        {volumeLitros.toFixed(2) / 1000} m³)
      </div>
    );
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white shadow-md rounded-xl">
      <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">
        Calculadora de Volume (Piscina Quadrada/Retangular)
      </h2>

      <label className="block mb-2 text-gray-700">Comprimento (m):</label>
      <input
        type="number"
        value={comprimento}
        onChange={(e) => setComprimento(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />

      <label className="block mb-2 text-gray-700">Largura (m):</label>
      <input
        type="number"
        value={largura}
        onChange={(e) => setLargura(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />

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
    </div>
  );
}
