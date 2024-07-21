import { Button } from "../button";
import Event1 from "../../images/event1.svg";
import Event2 from "../../images/event2.svg";
import Event3 from "../../images/event3.svg";
import { useTranslation } from "react-i18next";
import { ProgramEvent } from "../programEvent/programEvent";
import { useNavigate } from "react-router-dom";

const events = [
  {
    title: "Your Generosity Saves Lives",
    time_date: "2024/08/08 02:20pm",
    image: Event1,
  },
  {
    title: "A Bright Future for Indonesian Children",
    time_date: "2024/08/08 02:20pm",
    image: Event2,
  },
  {
    title: "Care for victims affected by floods",
    time_date: "2024/08/08 02:20pm",
    image: Event3,
  },
];

const Programs = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col p-[80px] gap-[25px]" id="programs">
      <div className="flex flex-row justify-between">
        <h1 className="text-[40px] font-title">{t("programs.title")}</h1>
        <Button variant="primary" onClick={() => navigate("/all-events")}>
          {t("programs.allevts_button")}
        </Button>
      </div>
      <div className="grid grid-cols-3  gap-[30px]">
        {events.map((event) => (
          <ProgramEvent
            className="w-[400px] h-[400px]"
            buttonText={t("programs.viewmore_button")}
            date={event.time_date}
            imageSrc={event.image}
            title={event.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Programs;
