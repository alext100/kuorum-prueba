import React, { useRef, useState } from "react";
import useClickOutsideEvent from "../../hooks/useOutside";

const ButtonInfo: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  useClickOutsideEvent(container, () => setShowInfo(false));

  const handleInfoClick = () => setShowInfo(!showInfo);

  return (
    <>
      <button
        name="Info"
        aria-pressed={showInfo}
        className="w-8 h-8"
        onClick={() => handleInfoClick()}
      >
        <img src="information.svg" alt="info" className="w-8 h-8" />
      </button>
      {showInfo && (
        <div
          ref={container}
          className="absolute top-12 right-0 w-64 p-4 text-sm text-left bg-white border border-gray-300 rounded-md shadow-lg"
        >
          <p className="p-1">
            Ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec diam
            eget risus ultricies feugiat. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
          </p>
        </div>
      )}
    </>
  );
};

export default ButtonInfo;
