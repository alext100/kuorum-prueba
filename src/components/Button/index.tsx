import React from "react";
import ButtonProps from "./Button.types";

const Button: React.FC<ButtonProps> = ({ text, onClick, size, state }) => {
  const getButtonSize = (size: string): string => {
    /* Don't had access to the design system, so I'm guessing small and large sizes */
    const sizeMap: { [key: string]: string } = {
      small: "w-[104px]",
      medium: "w-[147px]",
      large: "w-[190px]",
    };

    return sizeMap[size] || "w-[147px]";
  };

  return (
    <button
      title={text}
      className={`flex justify-center items-center gap-2 p-2 rounded-lg border ${
        state === "enabled"
          ? "-border--color-ap-button-primary-outline-enabled -text--color-ap-text-bluetiful -bg--color-brand-bluetiful-bluetiful-95"
          : "" // Don't had access to the design system
      } ${getButtonSize(size)}} 
      `}
      onClick={onClick}
    >
      <p className="semibold-m -text--color-ap-text-bluetiful">{text}</p>
    </button>
  );
};

export default Button;
