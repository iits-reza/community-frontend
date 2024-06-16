import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  title: string;
  description: string;
};

function Accordion({ title, description }: Props) {
  const [isAccordionOpen, setIsAccordionOpen] = React.useState(false);
  return (
    <div className=" p-[20px] cursor-pointer border-t-2 border-primary">
      <div
        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
        className={`flex items-center justify-between hover:bg-[#DDF4A6] p-4 ${
          isAccordionOpen ? "bg-[#ddf4a6]" : ""
        }`}
      >
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faCertificate} fontSize={32} />
          <h2 className="text-[32px] text-title ">{title}</h2>
        </div>
        <svg
          className="fill-primary shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isAccordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isAccordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out bg-[#DDF4A6] ${
          isAccordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "opacity-0 grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden text-[20px] p-[15px]">
          {description}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
