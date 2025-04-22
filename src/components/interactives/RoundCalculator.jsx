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
      setResultado(
        <div className="text-red-500">
          Preencha todos os campos com valores válidos.
        </div>
      );
      setMensagemConversao("");
      return;
    }

    if (p > 10) {
      p = p / 100;
      conversaoFeita = true;
    }

    const volumeMetrosCubicos = 0.785 * Math.pow(d, 2) * p;
    const volumeLitros = volumeMetrosCubicos * 1000;

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
      <h2 className="mb-12 text-2xl font-bold text-center text-gray-800">
        Piscina Circular
      </h2>

      <label className="block mb-2 text-gray-700">Diâmetro (m):</label>
      <input
        type="number"
        value={diametro}
        min="0"
        onKeyDown={(e) => {
          if (e.key === "-" || e.key === "e") {
            e.preventDefault();
          }
        }}
        onChange={(e) => setDiametro(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />

      <label className="block mb-2 text-gray-700">Profundidade (m):</label>
      <input
        type="number"
        value={profundidade}
        min="0"
        onKeyDown={(e) => {
          if (e.key === "-" || e.key === "e") {
            e.preventDefault();
          }
        }}
        onChange={(e) => setProfundidade(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />

      <Buttons
        onClick={calcularVolume}
        name="Clique para calcular"
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
            class="lucide lucide-calculator-icon lucide-calculator"
          >
            <rect width="16" height="20" x="4" y="2" rx="2" />
            <line x1="8" x2="16" y1="6" y2="6" />
            <line x1="16" x2="16" y1="14" y2="18" />
            <path d="M16 10h.01" />
            <path d="M12 10h.01" />
            <path d="M8 10h.01" />
            <path d="M12 14h.01" />
            <path d="M8 14h.01" />
            <path d="M12 18h.01" />
            <path d="M8 18h.01" />
          </svg>
        }
        className="w-full py-2 text-white transition rounded-md"
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
