import React from "react";
import MainCardProps from "./MainCard.types";

const MainCard: React.FC<MainCardProps> = ({
  icon,
  title,
  button,
  helpText,
  description,
}) => {
  return (
    <div className="flex flex-col w-full rounded-2xl border -border--color-ap-fields-enabled -bg--color-ap-bg-white box-content">
      <div className="flex flex-col items-center gap-4 px-4 py-6 self-stretch">
        <img src={icon} alt={title} className="w-[72px] h-[72px]" />

        <div className="flex flex-col justify-center items-center gap-1 self-stretch">
          {title && (
            <h3 className="bold-l text-center -text--color-ap-text-neutral-20">
              {title}
            </h3>
          )}
          <p className="regular-m text-center -text--color-ap-text-neutral-40">
            {description}
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 self-stretch">
          {button && button}
          <p className="regular-s text-center -text--color-ap-text-neutral-50">
            {helpText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
