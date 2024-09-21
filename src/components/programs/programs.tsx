import { Button } from "../button";
import { useTranslation } from "react-i18next";
import { EventCard } from "../eventCard/eventCard";
import { useNavigate } from "react-router-dom";

interface Event {
  id: string;
  eventDate: string;
  image: {
    url: string;
  };
  title: string;
  author: {
    name: string;
  };
  eventTime: string;
  content: {
    document: string;
  };
}

interface Props {
  eventsData: Event[];
}

const Programs = ({ eventsData = [] }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col p-6 lg:p-[80px] gap-[25px]" id="programs">
      <div className="flex flex-col lg:flex-row justify-between gap-y-3">
        <h1 className="lg:text-[40px] text-[25px] font-title w-full text-center lg:text-left rtl:text-right">
          {t("programs.title")}
        </h1>
        <Button
          variant="primary"
          className="lg:w-[350px] w-full"
          onClick={() => navigate("/events")}
        >
          {t("programs.allevts_button")}
        </Button>
      </div>
      <div className="grid lg:grid-cols-3 place-items-center  gap-[30px]">
        {eventsData.map((event) => (
          <EventCard
            key={event.id}
            onClick={() => navigate(`/events/${event.id}`)}
            className="w-[300px] h-[300px] lg:w-[360px] lg:h-[430px]"
            buttonText={t("programs.viewmore_button")}
            eventDate={event?.eventDate}
            imageSrc={event.image?.url}
            title={event.title}
            author={event.author?.name}
            eventTime={event.eventTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Programs;
