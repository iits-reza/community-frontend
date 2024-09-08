import { Button } from "../button";
import heroImageHome from "../../images/heroHomePage.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../header/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import translateIcon from "../../images/language.svg";
import i18next from "i18next";
import cookies from "js-cookie";
import {
  faAngleDown,
  faCertificate,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";
import { useMediaQuery } from "react-responsive";

type Props = {
  setIsModalOpen: (arg: boolean) => void;
};

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
const HomeComponent = ({ setIsModalOpen }: Props) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentLanguageCode = cookies.get("i18next") || "en";
  // const [isVisible, setIsVisible] = useState(false);
  // const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  const navigate = useNavigate();

  const goToABout = () => {
    navigate("/about-community");
  };
  return (
    <div
      className="px-[25px] lg:p-[80px] lg:pt-[200px] py-[160px] flex flex-col lg:flex-row gap-[80px] w-full justify-center"
      id="home"
    >
      <Header>
        <ul
          className={`flex ${
            isMobile ? "flex-col bg-white w-full" : "flex-row"
          } justify-between gap-x-[24px] border-l-2 border-primary pl-[50px] h-full`}
        >
          <li className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md">
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              href="#home"
            >
              <FontAwesomeIcon icon={faCertificate} className="mr-3" />
              <a>{t("header.home")}</a>
            </ScrollLink>
          </li>
          <li className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md">
            <ScrollLink
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
            </ScrollLink>
          </li>
          {/* <li className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md">
            <ScrollLink
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
            </ScrollLink>
          </li> */}
          <li className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md">
            <ScrollLink
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
            </ScrollLink>
          </li>
          <li className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md">
            <ScrollLink
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
            </ScrollLink>
          </li>
          <li className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md">
            <ScrollLink
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
            </ScrollLink>
          </li>
        </ul>
        <div className="relative mt-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="group flex flex-row items-center gap-x-2"
          >
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
            <ul className="absolute w-[190px] h-auto py-[10px] right-0 flex flex-col items-center justify-center bg-white border-2 border-primary rounded-md">
              <li className="w-full px-10 py-3 border-b-2">
                {t("header.language")}
              </li>
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
      </Header>
      <div className="flex flex-col gap-[25px] mt-2 w-full lg:w-[620px] justify-center content-center lg:p-0 lg:m-0 lg:justify-start lg:content-start">
        <h1 className="lg:text-[40px] font-title lg:w-[600px] w-full text-[25px]">
          {t("home.title")}
        </h1>
        <p className="lg:w-[600px] text[24px] text-[20px] w-full">
          {t("home.description")}
        </p>
        <div className="flex gap-2 flex-col lg:flex-row">
          <Button
            variant="primary"
            className="font-primary"
            onClick={() => setIsModalOpen(true)}
          >
            {t("home.join_button")}
          </Button>
          {/* <Link to="/about"> */}
          <Button
            variant="secondary"
            className="font-primary"
            onClick={goToABout}
          >
            {t("home.seemore_button")}
          </Button>
          {/* </Link> */}
        </div>
      </div>
      <img
        src={heroImageHome}
        alt="Hero image home page"
        className=" w-[600px] h-[424px] border-2 border-primary"
      />
    </div>
  );
};
export default HomeComponent;
