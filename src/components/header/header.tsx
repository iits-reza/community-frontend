import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCertificate,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";
import cookies from "js-cookie";

import translateIcon from "../../images/language.svg";
import communityLogo from "../../../public/vite.svg";
import i18next from "i18next";
import { Link, Events, scrollSpy, animateScroll as scroll } from "react-scroll";
import { Button } from "../button";

const languages = [
  {
    code: "en",
    name: "English",
    dir: "ltr",
  },
  {
    code: "fa",
    name: "فارسی",
    dir: "rtl",
  },
];
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentLanguageCode = cookies.get("i18next") || "en";
  const [isVisible, setIsVisible] = useState(false);
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 50); // Update visibility based on threshold
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage?.dir || "ltr";
    document.title = t("header.app_title");
  }, [currentLanguage, t]);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 290 });
  };

  return (
    <header className="flex flex-row justify-evenly items-center w-full bg-[#FCFCF4] h-[75px] text-primary border-primary border-2">
      {/* <Link to="/"> */}
      <Link
        className="HomeFC"
        to="HomeFC"
        spy={true}
        smooth={true}
        duration={500}
      >
        <h1 className="font-title font-extrabold text-xl">
          <img src={communityLogo} width={70} alt="Logo" />
          {/* Community */}
        </h1>
      </Link>
      <ul className="flex flex-row justify-between gap-x-[24px] border-l-2 border-primary pl-[50px] h-full">
        <li className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={590}
            className="gap-3 flex items-center"
            href="#home"
          >
            <FontAwesomeIcon icon={faCertificate} />
            <a>{t("header.home")}</a>
          </Link>
        </li>
        <li className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={590}
            className="gap-3 flex items-center"
            href="#about"
          >
            <FontAwesomeIcon icon={faCertificate} />
            <a>{t("header.about_community")}</a>
          </Link>
        </li>
        <li className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md">
          <Link
            to="donations"
            spy={true}
            smooth={true}
            offset={0}
            duration={590}
            className="gap-3 flex items-center"
            href="#donations"
          >
            <FontAwesomeIcon icon={faCertificate} />
            <a>{t("header.donation")}</a>
          </Link>
        </li>
        <li className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md">
          <Link
            to="programs"
            spy={true}
            smooth={true}
            offset={0}
            duration={590}
            className="gap-3 flex items-center"
            href="#programs"
          >
            <FontAwesomeIcon icon={faCertificate} />
            <a>{t("header.programs_events")}</a>
          </Link>
        </li>
        <li className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md">
          <Link
            to="faq"
            spy={true}
            smooth={true}
            offset={0}
            duration={490}
            className="gap-3 flex items-center"
            href="#faq"
          >
            <FontAwesomeIcon icon={faCertificate} />
            <a>{t("header.faq")}</a>
          </Link>
        </li>
        <li className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md">
          <Link
            to="footer"
            spy={true}
            smooth={true}
            offset={0}
            duration={490}
            className="gap-3 flex items-center"
            href="#footer"
          >
            <FontAwesomeIcon icon={faCertificate} />
            <a>{t("header.contact")}</a>
          </Link>
        </li>
      </ul>
      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="group flex flex-row items-center gap-x-2"
        >
          {}
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
          <ul className="absolute w-[200px] h-auto py-[10px] right-0 flex flex-col items-center justify-center bg-white border-2 border-primary rounded-md">
            <li className="w-full px-10 py-3 border-b-2">Langauage</li>
            <hr />
            {languages.map((lng) => (
              <li
                key={lng.code}
                onClick={() => {
                  setIsMenuOpen(false);
                  i18next.changeLanguage(lng.code);
                }}
                className="hover:bg-primary w-full hover:text-white cursor-pointer px-10 py-3"
              >
                {lng.code === currentLanguageCode && (
                  <FontAwesomeIcon icon={faCheck} className="mx-4" />
                )}
                {lng.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Button
        className={`fixed bottom-[25px] right-[50px] border-primary border-2 z-10 ${
          !isVisible && "hidden"
        }`}
        onClick={scrollToTop}
      >
        &uarr;
      </Button>
    </header>
  );
};
