import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import {
  DocumentRenderer,
  DocumentRendererProps,
} from "@keystone-6/document-renderer";

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
        createdAt
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

  const { event } = data!;
  return (
    <div className="flex flex-col  p-[200px] pt-[50px]  w-full  items-center content-center bg-postBackground">
      <div className="bg-postForground border-2 p-10 rounded-xl">
        {/* Event ID: {id} */}
        <div className="flex flex-row justify-self-start gap-3 items-center">
          <span className="text-[24px] text-white bg-cyan-400 w-14 h-14 p-6 flex items-center justify-center rounded-full">
            {event?.author?.name && event?.author?.name.substring(0, 1)}
          </span>
          <div className="flex flex-col">
            <span> {event.author.name}</span>
            {<span>{formatDate(event.createdAt)}</span>}
          </div>
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
  );
};
export default EventsPage;
