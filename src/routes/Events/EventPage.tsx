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
    <div className="flex flex-col  p-[200px] content-center w-full justify-center ">
      {/* Event ID: {id} */}
      <div className="flex flex-col w-[600px] gap-6">
        <img src={event.image.url} className="w-full" />
        <p>{event.title} </p>
        <p>
          When: {event.eventDate}- {event.eventTime}
        </p>

        <p>
          <DocumentRenderer
            renderers={renderer}
            document={event.content.document}
          />
        </p>
        {<span>Posted at: {formatDate(event.createdAt)}</span>}
      </div>
    </div>
  );
};
export default EventsPage;
