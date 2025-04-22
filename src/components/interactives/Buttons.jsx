import React from "react";

function Buttons({
  type = "retangular",
  onClick,
  href,
  name,
  icon,
  className: customClassName = "",
}) {
  const getButtonConfig = () => {
    switch (type) {
      case "retanguloRedondo":
        return {
          className:
            "w-16 h-16 bg-red-500 cursor-pointer select-none rounded-full border-[1px] border-blue-400 active:translate-y-2 shadow-button active:shadow-buttonActive active:border-b-0 transition-all duration-150",
          label: name || "Love Me",
          icon: icon,
        };
      case "esfera":
        return {
          className:
            "w-16 h-16 bg-red-500 rounded-full cursor-pointer select-none border-[1px] border-blue-400 active:translate-y-2 shadow-button active:shadow-buttonActive active:border-b-0 transition-all duration-150",
          label: name || "?",
        };
      case "retangular":
      default:
        return {
          className:
            "w-auto px-6 h-14 bg-primary rounded-lg cursor-pointer select-none border-b border-white/30 active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#01435C] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#006489]",
          label: name || "Active",
          icon: icon,
        };
    }
  };

  const { className, label } = getButtonConfig();

  // Mescla a className personalizada com a padrão
  const finalClassName = `${className} ${customClassName}`;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.open(href, "_blank");
    }
  };

  return (
    <div className="flex">
      <div className={`button ${finalClassName}`} onClick={handleClick}>
        <span className="flex items-center h-full gap-3 font-normal text-white phone2:text-lg text justify-centear phone1:text-paragraph4">
          {icon}
          {label}
        </span>
      </div>
    </div>
  );
}

export default Buttons;
