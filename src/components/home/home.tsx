import { Button } from "../button";
import heroImageHome from "../../images/heroHomePage.svg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="p-[80px] flex flex-row gap-[80px] w-full justify-center">
      <div className="flex flex-col gap-[25px]">
        <h1 className="text-[40px] font-title w-[600px]">{t("home.title")}</h1>
        <p className="w-[600px] text[24px]">{t("home.description")}</p>
        <div className="flex gap-2">
          <Button variant="primary" className="font-primary">
            {t("home.join_button")}
          </Button>
          <Button variant="secondary" className="font-primary">
            {t("home.seemore_button")}
          </Button>
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
export default Home;
