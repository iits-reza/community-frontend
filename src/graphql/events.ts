import { gql } from "@apollo/client";

export const GET_DOG_PHOTO = gql`
  query EventsQuery {
    events {
      title
      content {
        document
      }
    }
  }
`;
