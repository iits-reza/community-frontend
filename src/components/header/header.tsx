import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";

import type { PropsWithChildren } from "react";
import cookies from "js-cookie";

import communityLogo from "../../../public/vite.svg";
import {
  Link as ScrollLink,
  Events,
  scrollSpy,
  animateScroll as scroll,
} from "react-scroll";
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

export const Header = ({ children }: PropsWithChildren) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [isVisible, setIsVisible] = useState(false);
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      {isMobile ? (
        <p>Mobile menu</p>
      ) : (
        <header className="fixed top-0 z-10 flex flex-row justify-evenly items-center w-full bg-[#FCFCF4] h-[75px] text-primary border-primary border-2">
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            href="#home"
          >
            <h1 className="font-title font-extrabold text-xl">
              <img src={communityLogo} width={70} alt="Logo" />
            </h1>
          </ScrollLink>
          {children}
          <Button
            className={`fixed bottom-[25px] right-[50px] border-primary border-2 z-10 ${
              !isVisible && "hidden"
            }`}
            onClick={scrollToTop}
          >
            &uarr;
          </Button>
        </header>
      )}
    </>
  );
};
