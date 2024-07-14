import { Button } from "../button";
import heroImageHome from "../../images/heroHomePage.svg";
import { useTranslation } from "react-i18next";
// import InputWithLabel from "../InputWithLabel/InputWithLabel";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formValues, setFormValues] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    // Add more fields as needed
  });

  const handleChange = (name: string, value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const goToABout = () => {
    navigate("/about-community");
  };
  return (
    <div
      className="p-[80px] pt-[160px] flex flex-row gap-[80px] w-full justify-center"
      id="home"
    >
      <div className="flex flex-col gap-[25px]">
        <h1 className="text-[40px] font-title w-[600px]">{t("home.title")}</h1>
        <p className="w-[600px] text[24px]">{t("home.description")}</p>
        <div className="flex gap-2">
          <Button variant="primary" className="font-primary">
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
