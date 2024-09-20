import { Header } from "../../components/header/header";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";

import { useTranslation } from "react-i18next";
import { gql, useQuery } from "@apollo/client";
import { EventCard } from "../../components/eventCard/eventCard";
import { useMediaQuery } from "react-responsive";
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

// Define types based on your GraphQL query
interface Event {
  id: string;
  title: string;
  eventDate: string;
  content: { document: string };
  image: { url: string; height: number; width: number };
  author: { name: string };
  eventTime: string;
}

interface EventsData {
  events: Event[];
}

// This is a route for all events
const Events: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const navigate = useNavigate();
  const { loading, error, data } = useQuery<EventsData>(GET_EVENTS);

  // const eventData = data.events;
  if (loading) return "Loading...";
  if (error)
    return (
      <p className="text-rose-800 font-medium text-lg p-5 text-center  bg-orange-200">
        Server error please try again
        <Button
          onClick={() => navigate("/")}
          className="flex gap-4 items-center rounded-3xl"
        >
          ← Go to home
        </Button>
      </p>
    );

  return (
    <div className="flex flex-col py-[190px] gap-[25px] justify-center">
      <Header>
        <ul
          className={`flex  ${
            isMobile ? "flex-col bg-white w-full" : "flex-row"
          } justify-between gap-x-[24px] border-l-2 border-primary pl-[50px] h-full`}
        >
          <li
            onClick={() => navigate("/")}
            className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md"
          >
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              href="/"
              onClick={() => navigate("/")}
            >
              <FontAwesomeIcon icon={faCertificate} className="mr-3" />
              <a>{t("header.home")}</a>
            </ScrollLink>
          </li>

          <li className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md">
            <ScrollLink
              to="footer"
              spy={true}
              smooth={true}
              offset={0}
              duration={490}
              className="gap-3 flex items-center"
              href="#footer"
            >
              <FontAwesomeIcon icon={faCertificate} />
              <a>{t("header.contact")}</a>
            </ScrollLink>
          </li>
        </ul>
      </Header>
      <div className="flex flex-row justify-between lg:px-[80px] px-6">
        <div>
          <h1 className="lg:text-[40px] text-[25px] font-title w-[600px]">
            Events and programs
          </h1>
          <p className="w-[600px] lg:text[24px]">
            Here you can see all events and programs
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 justify-items-center content-center">
        {data?.events.map((event: Event) => (
          <EventCard
            key={event.id}
            author={event.author.name}
            // onClick={() => handleOpenModal(event, eventId)}
            onClick={() => navigate(`/events/${event.id}`)}
            className="w-[330px] h-[370px]"
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
