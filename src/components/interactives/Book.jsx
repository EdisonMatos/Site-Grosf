import { useState } from "react";

export default function BookAccordion({ chapters }) {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < chapters.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative w-auto h-auto bg-yellow-100 border-2 border-yellow-600 shadow-lg p-6 transition-all duration-500">
        <h2 className="text-xl font-bold mb-4">
          {chapters[currentPage].title}
        </h2>
        <p className="text-sm">{chapters[currentPage].content}</p>
      </div>

      <div className="flex gap-4 mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="bg-yellow-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Página anterior
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === chapters.length - 1}
          className="bg-yellow-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Próxima página
        </button>
      </div>
    </div>
  );
}

// Definir esses parametros ao importar Book para uso

// const chapters = [
//     { title: "Capítulo 1", content: "Era uma vez uma ideia mágica..." },
//     { title: "Capítulo 2", content: "O mistério se aprofunda a cada página..." },
//     { title: "Capítulo 3", content: "Até que tudo fez sentido, como num sonho lúcido." }
//   ];

{
  /* <div className="min-h-screen bg-stone-100 flex justify-center items-center">
      <Book chapters={chapters} />
    </div> */
}
