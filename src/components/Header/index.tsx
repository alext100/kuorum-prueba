import React from "react";
import HeaderProps from "./Header.types";

const Header: React.FC<HeaderProps> = ({ logo, buttonInfo }) => {
  return (
    <header className="flex min-w-[320px] justify-between w-full p-4 align-middle border-b -border-b--color-ap-fields-enabled -bg--color-ap-bg-white">
      <div className="flex items-center">{logo}</div>
      <div className="flex items-center">{buttonInfo}</div>
    </header>
  );
};

export default Header;
