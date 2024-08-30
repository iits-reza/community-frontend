import { Button } from "../button";
import { useTranslation } from "react-i18next";
import { EventCard } from "../eventCard/eventCard";
import { useNavigate } from "react-router-dom";

interface Props {
  eventsData: object[];
}

const Programs = ({ eventsData = [] }: Props) => {
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
      <div className="grid grid-cols-3 place-items-center  gap-[30px]">
        {eventsData.map((event) => (
          <EventCard
            key={event.id}
            onClick={() => console.log("hello")}
            className="w-[400px] h-[400px] border-lime-400 border-2  p-[20px] rounded-lg "
            buttonText={t("programs.viewmore_button")}
            eventDate={event?.eventDate}
            imageSrc={event.image?.url}
            title={event.title}
            author={event.author?.name}
            eventTime={event.eventTime}
          />
        ))}
        {/* {events.map((event) => (
          <EventCard
            onClick={() => console.log("hello")}
            className="w-[400px] h-[400px]"
            buttonText={t("programs.viewmore_button")}
            date={event.time_date}
            imageSrc={event.image}
            title={event.title}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Programs;
