import React, { useState } from "react";
import { Header } from "../../components/header/header";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faHome, faImage } from "@fortawesome/free-solid-svg-icons";

// import Event1 from "../../images/event1.svg"; // event image examoke
import { useTranslation } from "react-i18next";
import { ProgramModal } from "../../components/programModal/programModal";
// import { GET_EVENTS } from "../../graphql/events";
import { gql, useQuery } from "@apollo/client";
import { EventCard } from "../../components/eventCard/eventCard";
const GET_EVENTS = gql`
  query EventsQuery {
    events {
      id
      title
      content {
        document
      }
    }
  }
`;
// This is a route for events

const Events: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isGrid, setIsGrid] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loading, error, data } = useQuery(GET_EVENTS);

  // const eventData = data.events;
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const handleGrid = (arg: string) => {
    if (arg == "noGrid") setIsGrid(false);
    else if (arg == "grid") setIsGrid(true);
    console.log(isGrid);
  };

  const handleOpenModal = () => {
    console.log("open modal clicked");
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col pt-[190px] gap-[25px] justify-center">
      {isModalOpen && (
        <ProgramModal
          imageSrc="https://www.econlib.org/wp-content/uploads/2018/02/Charity-scaled.jpeg"
          title="Title"
          description="Charity is that pure love which our Savior Jesus Christ has. He has commanded us to love one another as He loves us. The scriptures tell us that charity comes from a pure heart (see 1 Timothy 1:5). We have pure love when, from the heart, we show genuine concern and compassion for all our brothers and sisters."
          timeData="Jul,24, 2024 - 12:30 PM"
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
          <h1 className="text-[40px] font-title w-[600px]">Events&programs</h1>
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
        className={`grid ${
          isGrid == true ? "grid-rows-5 grid-cols-4" : "grid-rows-5 grid-cols-2"
        }  gap-[30px] px-[80px] place-items-center`}
      >
        {data.events.map((event) => (
          <>
            <p>({event.title})</p>

            <EventCard
              onClick={handleOpenModal}
              className={`${
                isGrid == true ? "w-[400px] h-[400px]" : "w-[500px]"
              }`}
              buttonText={t("programs.viewmore_button")}
              date={event.time_date}
              imageSrc={event.image}
              title={event.title}
            />
          </>
        ))}
      </div>
    </div>
  );
};
export default Events;
