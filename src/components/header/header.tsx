import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import translateIcon from "../../images/language.svg";
export const Header = () => {
  return (
    <header className="flex flex-row justify-evenly items-center w-full bg-[#FCFCF4] h-[75px] text-primary border-primary border-2">
      <Link to="/">
        <h1 className="font-title font-extrabold text-xl">
          Our <br />
          Community
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
      <button className="group flex flex-row items-center gap-x-2">
        <FontAwesomeIcon
          icon={faAngleDown}
          fontSize={15}
          className="group-hover:pb-2 hover:duration-100 duration-100"
        />
        <img
          src={translateIcon}
          width={30}
          height={30}
          alt="Lnaguage Icon"
          className="rounded-md"
        />
      </button>
    </header>
  );
};
