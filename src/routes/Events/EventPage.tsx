import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

// Define the GraphQL query
const GET_EVENT_QUERY = gql`
  query GetEvent($id: ID!) {
    event(id: $id) {
      id
      title
      date
      time
      image {
        url
      }
      description
    }
  }
`;

const EventsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Use the query hook to fetch event details
  const { loading, error, data } = useQuery(GET_EVENT_QUERY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const event = data?.event;

  return (
    <div>
      {event ? (
        <div>
          <h1>{event.title}</h1>
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
          <img src={event.image.url} alt={event.title} />
          <p>{event.description}</p>
          {/* Display other event details here */}
        </div>
      ) : (
        <p>No event found.</p>
      )}
    </div>
  );
};

export default EventsPage;

// import { useParams } from "react-router-dom";

// const EventsPage: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   return <div>Event ID: {id}</div>;
// };
// export default EventsPage;
