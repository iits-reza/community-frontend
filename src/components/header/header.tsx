import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCertificate,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import translateIcon from "../../images/language.svg";
import communityLogo from "../../../public/vite.svg";
import { useState } from "react";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [primaryLnguage, isPrimaryLangauge] = useState(["English", "Persian"]);
  return (
    <header className="flex flex-row justify-evenly items-center w-full bg-[#FCFCF4] h-[75px] text-primary border-primary border-2">
      <Link to="/">
        <h1 className="font-title font-extrabold text-xl">
          <img src={communityLogo} width={70} alt="Logo" />
          {/* Community */}
        </h1>
      </Link>
      <ul className="flex flex-row justify-between gap-x-[24px] border-l-2 border-primary pl-[50px] h-full">
        <li className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md">
          <FontAwesomeIcon icon={faCertificate} />
          <a>About community</a>
        </li>
        <li className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md">
          <FontAwesomeIcon icon={faCertificate} />
          <a>Donation</a>
        </li>
        <li className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md">
          <FontAwesomeIcon icon={faCertificate} />
          <a>Programs & Events</a>
        </li>
        <li className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md">
          <FontAwesomeIcon icon={faCertificate} />
          <a>Contact</a>
        </li>
      </ul>
      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="group flex flex-row items-center gap-x-2"
        >
          English
          <FontAwesomeIcon
            icon={faAngleDown}
            fontSize={15}
            className={`hover:duration-100 duration-100 ${
              isMenuOpen && "rotate-180"
            } `}
          />
          <img
            src={translateIcon}
            width={30}
            height={30}
            alt="Lnaguage Icon"
            className="rounded-md"
          />
        </button>
        {isMenuOpen && (
          <ul className="absolute w-[250px] h-auto py-[10px] right-0 flex flex-col items-center justify-center bg-white border-2 border-primary rounded-md">
            <li className="w-full px-10 py-3 border-b-2">Langauage</li>
            <hr />
            <li
              className="hover:bg-primary w-full hover:text-white cursor-pointer px-10 py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              {/* <FontAwesomeIcon icon={faCheck} className="mr-4" /> */}
              Persian (فارسی)
            </li>
            <li
              className="hover:bg-primary w-full text-gray-400 hover:text-white cursor-pointer px-10 py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faCheck} className="mr-4" />
              English
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};
