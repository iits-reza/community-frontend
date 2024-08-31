import React, { useEffect, useState } from "react";
import { Header } from "../../components/header/header";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faHome, faImage } from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";
import { ProgramModal } from "../../components/programModal/programModal";
import { gql, useQuery } from "@apollo/client";
import { EventCard } from "../../components/eventCard/eventCard";
const GET_EVENTS = gql`
  query EventsQuery {
    events {
      id
      title
      eventDate
      content {
        document
      }
      image {
        url
        height
        width
      }
      author {
        name
      }
      eventTime
    }
  }
`;

// This is a route for events
const Events: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isGrid, setIsGrid] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { loading, error, data } = useQuery(GET_EVENTS);

  // Load the grid/list state from localStorage
  useEffect(() => {
    const savedViewMode = localStorage.getItem("viewMode");
    if (savedViewMode) setIsGrid(savedViewMode === "grid");
  }, []);

  // const eventData = data.events;
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const handleGrid = (gridType: string) => {
    const isGridView = gridType === "grid";
    setIsGrid(isGridView);
    localStorage.setItem("viewMode", isGridView ? "grid" : "list");
  };

  const handleOpenModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col pt-[190px] gap-[25px] justify-center">
      {isModalOpen && selectedEvent && (
        <ProgramModal
          imageSrc={selectedEvent.image.url}
          title={selectedEvent.title}
          description={selectedEvent.content.document}
          timeData={`${selectedEvent.eventDate} - ${selectedEvent.eventTime}`}
          onCloseModal={() => setIsModalOpen(false)}
        />
      )}
      <Header>
        <Button
          onClick={() => navigate("/")}
          className="flex gap-4 items-center"
        >
          <FontAwesomeIcon icon={faHome} className="" />
          Go back to Home
        </Button>
      </Header>
      <div className="flex flex-row justify-between px-[80px]">
        <div>
          <h1 className="text-[40px] font-title w-[600px]">
            Events and programs
          </h1>
          <p className="w-[600px] text[24px]">
            Here you can see all events and programs
          </p>
        </div>
        <div>
          <Button
            variant={`${isGrid && "selected"}`}
            onClick={() => handleGrid("grid")}
          >
            <FontAwesomeIcon icon={faGrip} />
          </Button>
          <Button
            onClick={() => handleGrid("noGrid")}
            variant={`${!isGrid && "selected"}`}
          >
            <FontAwesomeIcon icon={faImage} />
          </Button>
        </div>
      </div>
      <div
        className={`grid gap-[30px] items-center ${
          isGrid ? "grid-cols-4  " : "grid-cols-2 "
        }  px-[80px] `}
      >
        {data.events.map((event) => (
          <EventCard
            key={event.id}
            author={event.author}
            onClick={() => handleOpenModal(event)}
            className={` border-lime-400 border-2  p-[20px] rounded-lg ${
              isGrid ? "w-[300px]  h-[400px] " : "w-[500px] "
            }`}
            buttonText={t("programs.viewmore_button")}
            eventDate={event.eventDate}
            eventTime={event.eventTime}
            imageSrc={event.image.url}
            title={event.title}
          />
        ))}
      </div>
    </div>
  );
};
export default Events;
