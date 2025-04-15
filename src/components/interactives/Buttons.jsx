import React from "react";

function Buttons({ type = "retangular", onClick, href, name }) {
  const getButtonConfig = () => {
    switch (type) {
      case "retanguloRedondo":
        return {
          className:
            "w-40 h-16 bg-blue-500 cursor-pointer select-none rounded-full border-[1px] border-blue-400 active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]",
          label: name || "Love Me",
        };
      case "esfera":
        return {
          className:
            "w-16 h-16 bg-blue-500 rounded-full cursor-pointer select-none border-[1px] border-blue-400 active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841]",
          label: name || "?",
        };
      case "retangular":
      default:
        return {
          className:
            "w-40 h-16 bg-blue-500 rounded-lg cursor-pointer select-none border-b-[1px] border-blue-400 active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]",
          label: name || "Active",
        };
    }
  };

  const { className, label } = getButtonConfig();

  const handleClick = () => {
    if (onClick) {
      onClick(); // Abre modal ou executa ação customizada
    } else if (href) {
      window.open(href, "_blank"); // Redireciona para a URL
    }
  };

  return (
    <div className="flex flex-col ">
      <div className={`button ${className}`} onClick={handleClick}>
        <span className="flex flex-col items-center justify-center h-full text-lg font-normal text-white">
          {label}
        </span>
      </div>
    </div>
  );
}

export default Buttons;
