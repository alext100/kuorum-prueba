import React from "react";
import CardWithImageProps from "./CardWithImage.types";

const CardWithImage: React.FC<CardWithImageProps> = ({
  link,
  title,
  image,
  linkText,
  description,
}) => {
  return (
    <div className="flex w-full pr-0 justify-center items-center gap-4 border-[1px] rounded-2xl -border--color-ap-fields-enabled -bg--color-ap-bg-white">
      <div className="h-auto min-w-[104px] p-4 flex justify-center items-center rounded-l-2xl self-stretch gap-2 -bg--color-brand-bluetiful-bluetiful-95">
        <img src={image} alt={title} className="w-[72px] h-[72px]" />
      </div>
      <div className="flex py-4 pr-4 flex-col justify-center items-start">
        {title && (
          <h3 className="bold-l pb-1 -text--color-ap-text-neutral-20">
            {title}
          </h3>
        )}
        <p className="regular-m -text--color-ap-text-neutral-40">
          {description}
        </p>
        <a
          title={`Abrir la página ${linkText}`}
          className="semibold-m -text--color-ap-link-enabled text-center pt-4"
          href={link}
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default CardWithImage;
