import { useNavigate, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import {
  DocumentRenderer,
  DocumentRendererProps,
} from "@keystone-6/document-renderer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCertificate,
  faShare,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Header } from "../../components/header/header";
import { useMediaQuery } from "react-responsive";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

// Define the GraphQL query
const GET_RECORD_BY_ID = gql`
  query Event($where: EventWhereUniqueInput!) {
    event(where: $where) {
      id
      title
      eventDate
      eventTime
      createdAt
      content {
        document
      }
      author {
        name
      }
      image {
        url
      }
    }
  }
`;

interface EventVars {
  where: {
    id: string; // Assuming you are fetching by ID
  };
}

const EventsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState(false);

  const { loading, error, data } = useQuery<EventVars>(GET_RECORD_BY_ID, {
    variables: { where: { id } }, // Pass the `id` as the `where` variable
  });

  const renderer: DocumentRendererProps["renderers"] = {
    inline: {
      bold: ({ children }) => {
        return <strong>{children}</strong>;
      },
    },
    block: {
      paragraph: ({ children, textAlign }) => {
        return <p style={{ textAlign }}>{children}</p>;
      },
    },
  };
  // Handle loading, error, and data states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const formatDate = (date: string) => {
    // new Date(date, "MM/dd/yyy - hh:mm PM");
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(date).toLocaleString("en-US", options);
  };
  const handleCopyToClipBoard = async () => {
    await navigator.clipboard.writeText(location.href);
    setIsCopied(true);
  };
  const { event } = data!;
  return (
    <>
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
          <li
            onClick={() => navigate("/events")}
            className="gap-3 flex items-center cursor-pointer  border-b-2 hover:bg-primary hover:text-white py-2 px-3 rounded-md"
          >
            <ScrollLink
              to="events"
              spy={true}
              smooth={true}
              duration={500}
              href="/events"
              onClick={() => navigate("/events")}
            >
              <FontAwesomeIcon icon={faCertificate} className="mr-3" />
              <a>{t("header.programs_events")}</a>
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
      <div className="flex flex-col p-[200px] pt-[120px]  w-full  items-center content-center bg-postBackground">
        <button
          className="flex gap-2 items-center m-2 hover:bg-lime-300 p-2 rounded-xl self-start bg-lime-100 border-2"
          onClick={() => navigate(-1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Go back
        </button>
        <div className="bg-postForground border-2 p-10 pt-16 rounded-xl relative">
          {/* Event ID: {id} */}
          <div className="flex flex-row justify-between content-center gap-3 items-center">
            <div className="flex flex-row justify-between gap-3 items-center">
              <span className="text-[24px] text-white bg-cyan-400 w-14 h-14 p-6 flex items-center justify-center rounded-full">
                {event?.author?.name && event?.author?.name.substring(0, 1)}
              </span>
              <div className="flex flex-col">
                <span> {event.author.name}</span>
                {<span>{formatDate(event.createdAt)}</span>}
              </div>
            </div>
            {isCopied ? (
              "Copied!"
            ) : (
              <FontAwesomeIcon
                icon={faShareNodes}
                fontSize={20}
                className="cursor-pointer hover:text-teal-500"
                onClick={handleCopyToClipBoard}
              />
            )}
          </div>
          <div className="flex flex-col w-[700px] gap-6 mt-5">
            <img src={event.image.url} className="w-4/5" />
            <p className="text-2xl font-semibold">{event.title} </p>
            <p className="text-lg font-bold">
              When: {event.eventDate} - {event.eventTime}
            </p>

            <p className="text-lg">
              <DocumentRenderer
                renderers={renderer}
                document={event.content.document}
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default EventsPage;
