import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutImage from "../../images/aboutHero.svg";
import { Button } from "../button";
import {} from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { useTranslation } from "react-i18next";
const aboutList = [
  "Donations will be accepted to the right people.",
  "The process is safe, fast and reliable.",
  "You can choose to donate directly or periodically.",
  "Choose various payment methods that are safe and reliable.",
  "Various donation programs according to your interests.",
];
const About = () => {
  const { t } = useTranslation();

  return (
    <div
      className="w-full flex flex-row justify-center bg-[#F0F4e6] gap-[80px] py-[80px]"
      id="about"
    >
      <img
        src={AboutImage}
        alt="About image"
        className="w-[600px] border-2 border-primary"
      />
      <div className="flex flex-col gap-[25px]">
        <h1 className="text-[40px] font-title w-[600px]">{t("about.title")}</h1>
        {aboutList.map((_, index) => (
          <div className="flex flex-row items-center gap-2">
            <FontAwesomeIcon icon={faCircleCheck} />
            <p className="w-[600px] text[24px]">
              {t(`about.description_list.${index}`)}
            </p>
          </div>
        ))}

        <div className="flex gap-2 mt-4">
          <Button variant="secondary">{t("about.moreabout_button")}</Button>
        </div>
      </div>
    </div>
  );
};

export default About;
