import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
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
