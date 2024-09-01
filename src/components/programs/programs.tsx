import { Button } from "../button";
import { useTranslation } from "react-i18next";
import { EventCard } from "../eventCard/eventCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ProgramModal } from "../programModal/programModal";

interface Props {
  eventsData: object[];
}

const Programs = ({ eventsData = [] }: Props) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleOpenModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col p-[80px] gap-[25px]" id="programs">
      {isModalOpen && selectedEvent && (
        <ProgramModal
          imageSrc={selectedEvent.image.url}
          title={selectedEvent.title}
          description={selectedEvent.content.document}
          timeData={`${selectedEvent.eventDate} - ${selectedEvent.eventTime}`}
          onCloseModal={() => setIsModalOpen(false)}
        />
      )}
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
            onClick={() => handleOpenModal(event)}
            className="w-[400px] h-[400px] border-lime-400 border-2  p-[20px] rounded-lg "
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
